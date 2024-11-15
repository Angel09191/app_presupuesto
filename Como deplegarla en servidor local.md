# Como usar la app

## Pasos para ver la app

Revisen las 2 versiones, si quieren abrirlo solo en el pc y ya pus vean solo la segunda :).

### 1. Opcion larga para verla en el celular y pc

Ya habiendo descomprimido la app en el directorio donde esta, abrir el cmd (consola de comandos) y colocar lo siguiente:

             npm install -g lite-server

Cabe aclarar que tienen que tener instalado Node.js, en cuyo caso no lo tienen, visitar esta página: https://nodejs.org/en/download/prebuilt-installer y seguir los pasos de instalación.

Una vez ya instalado colocar el siguiente comando en algún cmd o power shell:

        node -v

Les aparecera la verison instalada.
Cerrando este parentesis, ya sabiendo que node está instalado y habiendo puesto el comando en un cmd donde estan los archivos colocar el siguiente comando para iniciar el servicio.

        lite-server

Esto abrira un servidor local en su computador donde estara la visualizacion de la aplicacion basica que se contruyó.

## Uso en el telefono

Para usarla en sus celular de forma fácil tienen que hacer lo siguiente:

1. Colocar en el cmd de su pc:

        ipconfig

Les aparecera la configuracion de las ip que maneja su pc, busquen la seccion que se llama "Adaptador de LAN inalámbrica Wi-Fi:" y tomen la direccion IPv4, es algo como: 192.168.2.5 o similar.

2. En su telefono celular, se conectan a la misma red que este conectado su pc y en algun navegador como chrome, moxilla o lo que sea, colocar en el buscardor la direccion ip que les aparecio en su pc seguido de dos puntos (:) y 3000 como en el siguiente ejemplo:

         192.168.2.5:3000

Esto deberia abrir una version movil de la app que puede funcionar a medias sin conexion, pero es solo de prueba por ahora.

### 2. OPcion rapida para visualizacion solo en pc

Tienen que tener instalado visual estudio code y tener la extencion que se llama: 

        Live Server

En donde aparecen los archivos le dan click derecho a la que dice index.html y la opcion que dice "Open with Live Server", estomontara la app en el navegador que usen.