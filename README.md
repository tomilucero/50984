LO PRIMERO QUE HABRIA QUE HACER ES ENTRAR AL VIUAL STUDIO CODE . UNA VEZ EN EL VISUAL VOY A LA PARTE DEL EXPLORER Ctrl+shift+E.
UNA VEZ AHI CUANDO VEA TODOS LOS ARCHIVOS,BUSCO EL input.txt una vez ahi lo que tengo que hacer es dar entradas para ver como me genera el arbol si con errores o sin errores . Cuando hay un error en la entrada que le doy en el arbol va a salir en rojo los errores
por ejemplo si le doy esta entrada . (ab|c)*[a-z]{1,3} me va mostrar esto
![image](https://github.com/user-attachments/assets/68a579d2-09b6-45f4-8b11-a0c5149d8faa)
guardo los cambios con el ctrl+s 
si me paro en el archivo SimpleLang y toco run / start debugging me va a mostrar esto ![image](https://github.com/user-attachments/assets/46eb0ed4-3c9c-412e-aa93-e050c0f3ed68)
se me va a gnerar el arbol sin problemas y sin ningun error .
si le doy esta entrada (ab|c)*[0-9]{1,3} en el input.txt y guardo todo como corresponde con el ctrl+s y ahora voy y me paro en erchivo SimpleLang y apreto run /start debugging me va a mostrar esto 
![image](https://github.com/user-attachments/assets/016c2e91-db4e-4edc-97c4-2ecbe85a6c97)
![image](https://github.com/user-attachments/assets/266425b2-e5b3-43e7-b16f-55ba44152a3a)
me tira error ya que en arbol se muestra en el rojo y el visual me detecta que un error en la entrada 
ahora tambien puedo ver todo esto en simbolo del sistema , primero voy y entro al cmd de la computadora ( simbolo del sistema)
lo primero que tengo que hacer es pararme en la carpeta donde tengo el proyecto 
lo hago poniendo cd + el nombre de la carpeta en donde tengo mi proyecto 
![image](https://github.com/user-attachments/assets/76d1ea58-94c8-4f59-89fa-6d4010bf44b1)
de ahi tengo que apretar npm start en el simbolo del sistema obviamente en la carpeta en donde este parado localmene . esto me deberia decir entrada valida o entrada invalida y me deberia mostrar la tablita de lexemas y tokens .
se va a ejecutar de acuerdo a lo que tenga guardado en la entrada en el visual studio code en el input.txt y deberia mostar algo asi 
![image](https://github.com/user-attachments/assets/ed46b2b6-d902-4e76-aab9-db9282e4168b)
asi con todas las entradas que quiera . las guardo a todas en el input.txt y de ahi vengo al simbolo del sistema para ver todo apretando nuevamente npm start.
otra forma de ver la tabla de tokens y de lexemas tengo que modificar en el archivo index.js para que no encuentre el input.txt entonces me va a pedir que ingrese yo la cadena ya sea en el la terminal del sistema o en el cmd de la compu
![image](https://github.com/user-attachments/assets/46c05300-8b00-4d3d-9d49-be21237c9b57)
![image](https://github.com/user-attachments/assets/5b5bd2aa-3d98-46cb-8cd5-2a740865233c)
en este caso no va encontrar input.txt y me va a pedir que yo ingrese una cadena
![image](https://github.com/user-attachments/assets/9b45f0df-a45d-4877-89b8-90625fb01f92)
en este caso va a ir a buscar en el input.txt por lo tanto tengo que ingresar mi cadena yo en el input.txt
![image](https://github.com/user-attachments/assets/32366266-d161-49bb-93a5-673de5dc4077)


