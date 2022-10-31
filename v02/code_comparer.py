# init: pip install -r requirements.txt
# example: python code-comparer.py --dirs gyakorlofeladat-module-system-* --files /**/*.js
# example2: python code-comparer.py -d gyakorlofeladat-module-system-* -f /**/*.js
import sys
import getopt
import argparse
import glob
import os
from numpy import vectorize
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Parse arguments
parser = argparse.ArgumentParser()
parser.add_argument('-d', '--dirs', default='gyakorlofeladat-module-system-*')
parser.add_argument('-f', '--files', default='/**/*.js')
args = parser.parse_args()

repos = glob.glob(args.dirs)

def get_contents(parent_dir=''):
    files = glob.glob(parent_dir + args.files, recursive=True)
    return '\n'.join([open(File).read() for File in files])

sample_contents = [get_contents(repo) for repo in repos]

def vectorize(Text): return TfidfVectorizer().fit_transform(Text).toarray()
def similarity(doc1, doc2): return cosine_similarity([doc1, doc2])

vectors = vectorize(sample_contents)
s_vectors = list(zip([repo.split('-')[-1] for repo in repos], vectors))

def check_plagiarism():
    results = set()
    global s_vectors
    for sample_a, text_vector_a in s_vectors:
        new_vectors = s_vectors.copy()
        current_index = new_vectors.index((sample_a, text_vector_a))
        del new_vectors[current_index]
        for sample_b, text_vector_b in new_vectors:
            sim_score = similarity(text_vector_a, text_vector_b)[0][1]
            sample_pair = sorted((sample_a, sample_b))
            score = sample_pair[0], sample_pair[1], sim_score
            results.add(score)
    return results

results = check_plagiarism()
results = sorted(results, key=lambda item: item[2], reverse=True)

for data in results:
    print(data)
