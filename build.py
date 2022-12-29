from html.parser import HTMLParser
from operator import index
import os, django
import shutil

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'setup.settings')
django.setup()

def rename_react_files(static, file_names):

    if(static == 'img'):
        file_path = 'frontend/piulzza/build/static'
        images = os.listdir(f'{file_path}/media') 
        for image in images:
            old_file = os.path.join(f'{file_path}/media/{image}')
            files_splited = image.rsplit('.')
            new_file = os.path.join(f'{file_path}/media/{files_splited[0] + "."+ files_splited[-1]}')
            os.rename(old_file, new_file)
    else:
        file_path = 'frontend/piulzza/build/static/'
        javascript_or_css = os.listdir(f'{file_path}{static}') 

        x = 0
        for file in javascript_or_css:
            if file != file_names[x]:
                old_file = os.path.join(f'{file_path}{static}/{file}')
                select_js_or_css = file.rsplit('.')
                if len(select_js_or_css) == 3:
                    new_file = os.path.join(f'{file_path}{static}/{select_js_or_css[0] + "."+ select_js_or_css[-1]}')
                    os.rename(old_file, new_file)

            x += 1

    print(f"Arquivos {static} renomeados para produção")

def move_icon_file():
    file_path = 'frontend/piulzza/build/favicon.ico'
    file_destination = "frontend/piulzza/build/static/favicon.ico"
    try:
        os.rename(file_path, file_destination)
        print("Favicon em produção")
    except:
        print("Não existe este arquivo, verificar se o favicon ja esta no local correto.")
        pass

if __name__ == '__main__':
    move_icon_file()
    rename_react_files('js', ['main.js.map', 'main.js', 'main.js.LICENSE.txt'])
    rename_react_files('css', ['main.css.map', 'main.css'])
    rename_react_files('img', ['main.css.map', 'main.css'])