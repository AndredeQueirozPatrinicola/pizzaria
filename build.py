from html.parser import HTMLParser
from operator import index
import os, django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'setup.settings')
django.setup()

def rename_react_files(static, file_names):
    file_path = 'frontend/piulzza/build/static/'
    javascript_or_css = os.listdir(f'{file_path}{static}') 
    
    x = 0
    for file in javascript_or_css:

        if file != file_names[x]:

            old_file = os.path.join(f'{file_path}{static}/{file}')
            new_file = os.path.join(f'{file_path}{static}/{file_names[x]}')

            os.rename(old_file, new_file)

        x += 1

if __name__ == '__main__':
    rename_react_files('js', ['main.js.map', 'main.js', 'main.js.LICENSE.txt'])
    rename_react_files('css', ['main.css.map', 'main.css'])