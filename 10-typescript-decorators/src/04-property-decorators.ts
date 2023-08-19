export function DatabaseId(): PropertyDecorator {
    // return (constructor())=>{} // eger decoratoru kullanacagimiz property statikse constructor methodu return arrow function inputuna vermemiz gerekir 

    return(classPrototype:any, propertyKey:string | symbol)=>{
        Object.defineProperty(classPrototype, propertyKey,{
            get:function(){
                if(!this["_id"]){ //class["property"] sadecebu return scobunun etkiledigi property oldugunu belirttir. egeir this.id deseydim hata alirdim cunku o ust clasin propertysini ifde eder ve getter methodu calistirmaya calisirdi. 
                    this["_id"] = Date.now().toString(36) + Math.random().toString(36).slice(2);
                }
                return this["_id"]
            }
        });
    }
}

//amacimiz eger property create edildiyse durak edilmemise otmatik id olusturmak.