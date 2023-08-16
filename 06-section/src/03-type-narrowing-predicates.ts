interface Car {
  readonly title: string;
  subtitle: string;
  Power?: number;
}

const car: unknown = { title: "Maserati", Power: 15, subtitle: "nebilim" };

if(isCar(car)){
    car.Power = 20;
}


//"value is Car" olarak donmesi pedicate function ciktisidir. ve functiona giren 
//degiskenin type'ini degistirir. ayrica true false olarak doner..
function isCar(value:unknown):value is Car{ 
    const car = value as Car;
    return car?.title != null && car?.subtitle != null;
};

console.log(car); //output : { title: 'Maserati', Power: 20, subtitle: 'nebilim' }