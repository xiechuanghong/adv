import provinces from '../../static/provinces.json'
import areas from '../../static/areas.json'
import cities from '../../static/cities.json'

export const zmGetProvinces = () => {
    return provinces;
}

export const zmGetcities = (provinceCode) => {
    if (!provinceCode) {
        provinceCode = '11'
    }
    let citiesArr = [];
    cities.forEach(function (item) {
        if (item.provinceCode == provinceCode) {
            console.log(item)
            citiesArr.push(item)
        }
    })
    return citiesArr
}

export const zmGetareas = (cityCode) => {
    // console.log(areas)
    if (!cityCode) {
        cityCode = '1101'
    }
    let areasArr = [];
    areas.forEach(function (item) {
        if (item.cityCode == cityCode) {
            areasArr.push(item)
        }
    })
    return areasArr
}