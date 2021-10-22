function calculate()
{
    side=document.getElementById("pointa").value
    area=side*side;
    perimiter=side*4;

    document.getElementById("amount").innerHTML=area;
    document.getElementById("amountv2").innerHTML=perimiter;
}