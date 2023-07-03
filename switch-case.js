let tanggal, bulan, bulanString, tahun
tanggal = 29
bulan = 12
tahun = 2000
if(tanggal && bulan && tahun){
    if (tahun>= 1900 && tahun <= 2200){
        switch (bulan){
            case 1:
                if(tanggal>=1 && tanggal<=31){
                    console.log(tanggal+" januari "+tahun)
                } else console.log("salah memasukan tanggal")
                break;
            case 2:
                if(tanggal>=1 && tanggal<=29){
                    console.log(tanggal+" februari "+tahun)
                } else console.log("salah memasukan tanggal")
                break;
            case 3:
                if(tanggal>=1 && tanggal<=31){
                    console.log(tanggal+" maret "+tahun)
                } else console.log("salah memasukan tanggal")
                break;
            case 4 :
                if(tanggal>=1 && tanggal<=30){
                    console.log(tanggal+" april "+tahun)
                } else console.log("salah memasukan tanggal")
                break;
            case 5 :
                if(tanggal>=1 && tanggal<=31){
                    console.log(tanggal+" mei "+tahun)
                } else console.log("salah memasukan tanggal")
                break;
            case 6 :
                if(tanggal>=1 && tanggal<=30){
                    console.log(tanggal+" juni "+tahun)
                } else console.log("salah memasukan tanggal")
                break;
            case 7 :
                if(tanggal>=1 && tanggal<=31){
                    console.log(tanggal+" juli "+tahun)
                } else console.log("salah memasukan tanggal")
                break;
            case 8 :
                if(tanggal>=1 && tanggal<=31){
                    console.log(tanggal+" Agustus "+tahun)
                } else console.log("salah memasukan tanggal")
                break;
            case 9 :
                if(tanggal>=1 && tanggal<=30){
                    console.log(tanggal+" september "+tahun)
                } else console.log("salah memasukan tanggal")
                break;
            case 10 :
                if(tanggal>=1 && tanggal<=31){
                    console.log(tanggal+" oktober "+tahun)
                } else console.log("salah memasukan tanggal")
                break;
            case 11 :
                if(tanggal>=1 && tanggal<=30){
                    console.log(tanggal+" november "+tahun)
                } else console.log("salah memasukan tanggal")
                break;
            case 12 :
                if(tanggal>=1 && tanggal<=31){
                    console.log(tanggal+" desember "+tahun)
                } else console.log("salah memasukan tanggal")
                break;
            default:
                console.log("salah menginput bulan")
                break;
        }
    } else console.log("salah input tahun")
}
