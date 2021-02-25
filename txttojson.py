import json
import os
import math


OutputFilename = 'finalv2.json'


InputPath  = '/Users/alekyapopuri/visual-analytics-project1/dataset 2'
OutputPath = '/Users/alekyapopuri/visual-analytics-project1'


InputPath  = os.path.normpath(InputPath)
OutputPath = os.path.normpath(OutputPath)

# Define output file
out_file = os.path.join(OutputPath,OutputFilename)

size = None

def append_record(fn, record):
    with open(fn, 'a') as f:
        json.dump(record, f)



for fn in os.listdir(InputPath):

    in_file = os.path.join(InputPath,fn)
    if os.path.isfile(in_file):
        print("  Adding: " + fn)
        with open(in_file, 'r') as file_in:
            content = file_in.read()
            d = {'filename':in_file, 'content':content}
            print("d['filename']: ", d['filename'] )
            append_record(out_file, d)