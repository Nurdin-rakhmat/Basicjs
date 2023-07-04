function mesinRoti(x) {
    // ada 2 tipe
    // 1. punya return 
    // 2 tidak punya return 
    return 'roti mentega'
}

function jalankanMesin() {
    const bahan = 'mentega'

    mesinRoti(bahan)
}

const roti = mesinRoti('tepung') // roti

roti


const bikinRoti = jalankanMesin()

bikinRoti