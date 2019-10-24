class Bases {
    constructor(codigo, nombre, minutos, descripcion){
        this._codigo = codigo;
        this._nombre = nombre;
        this._minutos = minutos;
        this._descripcion = descripcion;
    }
    get codigo(){
        return this._codigo;
    }
    toString(){
        return 'Código: ' + this._codigo + ' Nombre: ' + this._minutos + ' Descripcion: ' + this._descripcion;
    }
}

class Ruta {
    constructor(tabla, clave, numero, nombre){
        this._base = 0;
        this._tabla = tabla;
        this._clave = clave;
        this._numero = numero;
        this._nombre = nombre;
        this._inicio = inicio;
        this._final = final;
    }

    get numero(){
        return this._numero;
    }
    get nombre(){
        return this._nombre;
    }
    get base(){
        return this._base;
    }
    agregar(clave, nombre, numero, inicio, final){
        if(this._sumador <=9){
            let aux = 0;
            this.clave = clave;
            if (clave === '' || clave === (this._sumador + 1) || clave > this._sumador){
                aux = this._base;
                if(this._sumador === 0){
                    this._base = new Bases(this._clave, nombre, minutos, descripcion);
                } else {
                    while(aux._siguiente != null){
                        aux = aux._siguiente;
                    }
                    aux._siguiente = new Bases(this._clave, nombre, minutos, descripcion);
                    aux._siguiente._anterior = aux;
                    this._final = aux._siguiente;
                }
                this._sumador++;
                this._clave++;
                alert('articulo agregado');
            }
        /*
            else if (Number(this._clave) > 0 && Number(this._clave) <= this._sumador) 
                {
                    aux = this._articulo;
                    let auxc = 1;
                    while(this._clave > auxc + 1)
                    {
                        aux = aux._siguiente;
                        auxc++;
                    }
                    let aux2 = new Inventario(this._clave, nombreA, precio, cantidad, descripcion);
                    aux2._siguiente = aux._siguiente;
                    //aux2._siguiente._anterior = aux2;
                    aux2._anterior = aux;
                    aux._siguiente = aux2;
                    this._contador++;
                    this._clave++;
                    alert('articulo agregado correctamente');
                } 
                else {
                    alert('Posicion no válida');
                }
                //console.log(this._articulo);
                this.mostrarTa();
            }
        else
        {
            alert('inventario lleno');
        }
    }

       buscar(codigo) 
       {
           let revisor;
           codigo = Number(codigo);
           let aux = this._articulo;
               if (aux._codigo === codigo) 
                   {
                         revisor = this._articulo;
                       alert('Articulo encontrado. ');
                   }
               else
                   {
                       while(aux._codigo != codigo)
                       {
                           aux = aux._siguiente;
                           if(aux === null)
                           {
                               break;
                           }
                       }
                       if(aux._codigo === codigo)
                       {
                           revisor = aux;
                           alert('Articulo encontrado. ');
                       }
                       else
                       {
                           alert('Articulo no encontrado. ');
                       }
                   }
               return revisor;
       }
       eliminar(elimCodigo) {
           elimCodigo = Number(elimCodigo);
           if (this.revision(elimCodigo) === 1) {
               let aux = this._articulo;
               if(aux._codigo === elimCodigo) {
                   this._articulo = aux._siguiente;
               }
               else {
                   while(aux._siguiente != null && aux != undefined) {
                       if(aux._siguiente._codigo === elimCodigo) {
            
                           aux._siguiente = aux._siguiente._siguiente;
                   }
                   aux = aux._siguiente;
               }
            }
               alert('Se ha eliminado el articulo correctamente');
           } 
           else {
               alert('El código ingresado no existe, por favor verifique de nuevo');
           }
           this.mostrarTa();
       }
       revision(codigo) {
        codigo = Number(codigo);
        let revisor = -1;
        let aux = this._articulo;
            if (aux._codigo === codigo) 
                {
                    revisor = 1;
                }
            else {
                    while(aux._codigo != codigo && aux.codigo != null)
                    {
                        aux = aux._siguiente;
                    }
                    if(aux._codigo === codigo) {
                        revisor = 1;
                    }
                }
            return revisor;
    }
        mostrarTa() {
            console.log("cuantos" + this._sumador);
            this._tabla.innerHTML = '';
            let etiquetarA = [];
            let aux = this._articulo;
            let auxc = 0;
            for (let i = 0; i < this._sumador; i++) {
                etiquetarA[i] = document.createElement('p')
            }
            while(auxc === 0 || aux != null && auxc < this._sumador){
                    console.log(aux);
                    etiquetarA[auxc].innerHTML = aux.toString();
                    this._tabla.appendChild(etiquetarA[auxc]);
                    auxc++;
                    aux=aux._siguiente;
                    
            }
        }
        invertirTa(div) {
            let inversor = '';
            let aux = this._articulo;
            let etiquetarA = 0;
            while(aux != null)
            {
                inversor = (aux.toString() +"<br>" + "<p>" + inversor);
                aux = aux._siguiente;
            }
            this._tabla.innerHTML = '';
                etiquetarA = document.createElement('p');
                etiquetarA.innerHTML = inversor;
                div.appendChild(etiquetarA);
            
            /*this._tabla.innerHTML = '';
            let etiquetarA = [];
            let aux = this._ultimo;
            let auxc = 0;
            for (let i = 0; i < this._sumador; i++) {
                etiquetarA[i] = document.createElement('p')
            }
            while(auxc === 0 || aux != null && auxc < this._sumador){
                    console.log(aux);
                    etiquetarA[auxc].innerHTML = aux.toString();
                    this._tabla.appendChild(etiquetarA[auxc]);
                    auxc++;
                    aux=aux._anterior;
                    
            }*/
           }

    }

