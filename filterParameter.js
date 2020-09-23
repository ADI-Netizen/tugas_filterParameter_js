function panggilFilterParameters(value) {
    var arr = [
        { negara: 'Indonesia', benua: 'Asia' },
        { negara: 'Jerman', benua: 'Eropa' },
        { negara: 'Spanyol', benua: 'Eropa' },
        { negara: 'Korea', benua: 'Asia' },
        { negara: 'Portugal', benua: 'Eropa' },
        { negara: 'Amerika Serikat', benua: 'Amerika' },
    ];

    var benuaEropa = arr.filter(function (item) {
        // Untuk filter berdasar Benua Asia
        // return item.benua === "Asia" 

        // Untuk filter berdasar Benua Eropa
        return item.benua === "Eropa"
    });

    console.log(benuaEropa);
}

panggilFilterParameters("Asia")