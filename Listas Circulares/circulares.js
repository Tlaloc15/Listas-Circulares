class Bases {
    constructor(codigo, nombre, hSalida, tiempo, descripcion){
        this._codigo = codigo;
        this._nombre = nombre;
        this._hSalida = hSalida;
        this._hLlegada;
        this._tiempo = tiempo;
        this._descripcion = descripcion;
        this._siguiente;
        this._anterior;
    }
    get codigo(){
        return this._codigo;
    }
    toString(){
        let tiempo = this._hSalida;
        let arrayTiempo = tiempo.split(":");
        let hora = Number(arrayTiempo[0]);
        let minuto = Number(arrayTiempo[1]) + this._tiempo;
        while(minuto >= 60 || hora >= 24)
        {
            if(minuto >= 60)
            {
                hora++;
                minuto = minuto - 60;
            }
            else if(hora >= 24)
            {
                hora = hora - 24;
            }
        }
            if (hora < 10)
            {
                hora = "0" + hora;
            }
            if (minuto < 10)
            {
                minuto = "0" + minuto;
            }
            this._hLlegada = hora + ":" + minuto;
        document.querySelector('#hSalida').value = this._hLlegada;
        return 'Código de Estación: ' + this._codigo + ' Nombre: ' + this._nombre + ' Hora de salida: ' + this._hSalida + ' Llegada: ' + this._hLlegada + ' Descripción: ' + this._descripcion ;
    }
}

class Ruta {
    constructor(tabla, clave){
        this._base = 0;
        this._tabla = tabla;
        this._clave = clave;
        this._sumador = 0;
        this._inicio = inicio;
        this._final = final;
    }

    get clave(){
        return this._clave;
    }
    get base(){
        return this._base;
    }
    agregar(clave, nombre, hSalida, tiempo, descripcion){
    
            let aux;
            this._clave = clave;
            if (clave === '' || clave === (this._sumador + 1) || clave > this._sumador){
                aux = this._base;
                if(this._sumador === 0){
                    this._base = new Bases(this._clave, nombre, hSalida, tiempo, descripcion);
                    this._inicio = this._base;
                } else {
                    while(aux._siguiente != this._inicio && this._sumador > 1){
                        aux = aux._siguiente;
                    }
                    aux._siguiente = new Bases(this._clave, nombre, hSalida, tiempo, descripcion);
                    aux._siguiente._anterior = aux;
                    aux._siguiente._siguiente = this._inicio;
                    this._final = aux._siguiente;
                    this._inicio._anterior = this._final;
                }
                this._sumador++;
                this._clave++;
                alert('Base agregada');
            }
    
            else if (Number(this._clave) > 0 && Number(this._clave) <= this._sumador) 
                {
                    aux = this._base;
                    let auxc = 1;
                    while(this._clave > auxc + 1)
                    {
                        aux = aux._siguiente;
                        auxc++;
                    }
                        if(this._clave ===1){
                    let aux2 = new Ruta(this._clave, nombre, hSalida, tiempo, descripcion);
                    aux2._siguiente = aux;
                    aux2._siguiente._anterior = aux2;
                    aux = aux2;
                    this._inicio = aux;
                    this._inicio._anterior = this._final;
                } 
                else if(clave < this._final._codigo){
                let aux2 = new Ruta(this._llave, nombre, hSalida, tiempo, descripcion);
                aux2._siguiente = aux._siguiente;
                aux2._anterior = aux;
                aux2._siguiente._anterior = aux2;
                aux._siguiente = aux2;
                } else {
                    aux = aux._siguiente;
                    aux._siguiente = new Ruta(this._llave, nombre, hSalida, Tiempo, descripcion);
                    aux._siguiente._anterior = aux._siguiente;
                    aux._siguiente._siguiente = this._inicio;
                    this._final = aux._siguiente;
                }
                this._sumador++;
                this._clave++;
                alert('Base agregada correctamente');
            }
        else
        {
            alert('Base no válida');
        }
        this.mostrarTa();
    }

       buscar(codigo) 
       {
           let revisor;
           codigo = Number(codigo);
           let aux = this._base;
               if (aux._codigo === codigo) 
                   {
                         revisor = this._base;
                       alert('Base encontrada. ');
                   }
               else
                   {
                       while(aux._codigo != codigo)
                       {
                           aux = aux._siguiente;
                       }
                       if(aux._codigo === codigo)
                       {
                           revisor = aux.toString();
                           alert('Ruta encontrada ');
                       }
                       else
                       {
                           alert('Ruta no encontrada ');
                       }
                   }
               return revisor;
       }
       eliminar(elimCodigo) {
           elimCodigo = Number(elimCodigo);
           if (this.revision(elimCodigo) === 1) {
               let aux = this._base;
               if(aux._codigo === elimCodigo) {
                   this._base = aux._siguiente;
               }
               else {
                   aux = aux._siguiente;
                   while(aux._siguiente != this._inicio) {
                       if(aux._siguiente._codigo === elimCodigo) {
                            let contenedor = aux._siguiente;
                            aux._siguiente = aux._siguiente._siguiente;
                            aux._tiempo = contenedor._tiempo;
                            aux._hSalida = contenedor._hSalida;
                            aux._anterior._tiempo = aux._tiempo + contenedor._tiempo;
                   }
                   aux = aux._siguiente;
               }
            }
               alert('Se ha eliminado la base correctamente');
           } 
           else {
               alert('El código ingresado no existe, por favor verifique de nuevo');
           }
           this.mostrarTa();
       }
       revision(codigo) {
        codigo = Number(codigo);
        let revisor = -1;
        let aux = this._base;
            if (aux._codigo === codigo) 
                {
                    revisor = 1;
                }
            else {
                    while(aux._codigo != codigo && aux.codigo != this._inicio)
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
            let aux = this._base;
            let auxc = 0;
            for (let i = 0; i < this._sumador; i++) {
                etiquetarA[i] = document.createElement('p')
            }
            while(auxc === 0 || aux != this._inicio && auxc < this._sumador){
                    console.log(aux);
                    etiquetarA[auxc].innerHTML = aux.toString();
                    this._tabla.appendChild(etiquetarA[auxc]);
                    auxc++;
                    aux = aux._siguiente;
                    
            }
        }
        establecerIn(inicio) {
            this._tabla.innerHTML = '';
            let etiquetarA = [];
            let aux = this._base;
            while(aux._codigo != inicio){
                aux = aux._siguiente;
            }
            this._inicio = aux;
            let auxc = 0;
            for (let i = 0; i < this._sumador; i++) {
                etiquetarA[i] = document.createElement('p')
            }
            while(auxc === 0 || aux != this._inicio && auxc < this._sumador){
                    console.log(aux);
                    etiquetarA[auxc].innerHTML = aux.toString();
                    if(aux._siguiente._hSalida < aux._hLlegada){
                    aux._siguiente._hSalida = aux._hLlegada;
                }
                    this._tabla.appendChild(etiquetarA[auxc]);
                    auxc++;
                    aux=aux._anterior;
                    
            }
           }
           vueltas()
    {
        this._tabla.innerHTML = '';
        let etiquetarA = [];
        let aux = this._base;
        aux._hSalida = this._final._hLlegada; 
        let auxc = 0;
        for (let i = 0; i < this._sumador; i++) 
        {
            etiquetarA[i] = document.createElement('p');
        }
        while(auxc === 0 || aux != this._inicio && auxc < this._sumador)
            {
                etiquetarA[auxc].innerHTML = aux.toString();
                if(aux._siguiente._hSalida < aux._hLlegada)
                {
                    aux._siguiente._hSalida = aux._hLlegada;
                }
                this._tabla.appendChild(etiquetarA[auxc]);
                auxc++;
                aux = aux._siguiente;
            }
    }
    }

    class Main{
        constructor(){
    
    var ruta = new Ruta(document.querySelector('#tablaRutas'), Number(document.querySelector('#codigo').value));
    document.querySelector('#agregar').addEventListener('click', () => {
        let clave = Number(document.querySelector('#codigo').value);
        let nombre = document.querySelector('#nombre').value;
        let hSalida = Number(document.querySelector('#hSalida').value);
        let tiempo = Number(document.querySelector('#tiempo').value);
        let descripcion = document.querySelector('#descripcion').value;
    
        ruta.agregar(clave, nombre, hSalida, tiempo, descripcion);
        document.querySelector('#codigo').value = ruta.clave;
    });
    document.querySelector('#buscar').addEventListener('click', () => {
        let buscarArticulo = ruta.buscar (document.querySelector('#buscarCod').value);
        document.querySelector('#tablaBuscar').innerHTML = buscarArticulo;
    });
    document.querySelector('#eliminar').addEventListener('click', () => {
        ruta.eliminar(document.querySelector('#eliminarCodigo').value);
        document.querySelector('#codigo').value = ruta.clave;
    });
    document.querySelector('#establecerInicio').addEventListener('click', () => {
        ruta.establecerIn(document.querySelector('#establecerInicio'));
    });
    document.querySelector('#vueltas').addEventListener('click', () => {
        ruta.vueltas();
    });
}
    }