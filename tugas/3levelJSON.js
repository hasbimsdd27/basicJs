const CPU ='{"Processor": ["Intel", "AMD"], "Ram":{"DDR3":["1GB","2GB","4GB","8GB","16GB"],"DDR4":["4GB","8GB","16GB"]}, "Storage":{"HDD":["320GB","500GB","1TB","2TB","4TB"],"SSD":["120GB","240GB","512GB"]}}';
const dataJSON = JSON.parse(CPU);

console.log(dataJSON)