let x = [[-1, 1, -1, 1, 1, -1, -1, 1, -1, -1, 1, -1, 1, 1, 1]
    ,[-1, 1, -1, 1, 1, -1, -1, 1, -1, -1, 1, -1, 1, 1, -1]
    ,[-1, 1, -1, 1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1, -1]
    
    /* Número 2: */
    ,[1, 1, 1, -1, -1, 1, 1, 1, 1, 1, -1, -1, 1, 1, 1]
    ,[1, 1, -1, -1, -1, 1, -1, 1, -1, 1, -1, -1, -1, 1, 1]
    ,[1, 1, -1, -1, -1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1]

    /* Número 3: */
    ,[1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    ,[1, 1, 1, -1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1]
    ,[-1, 1, 1, -1, -1, 1, -1, 1, 1, -1, -1, 1, -1, 1, 1]

    /* Número 4: */
    ,[1, -1, 1, 1, -1, 1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    ,[-1, -1, -1, 1, -1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1]
    ,[-1, -1, -1, 1, -1, 1, 1, 1, 1, -1, -1, 1, -1, -1, 1]

    /* Número 5: */
    ,[1, 1, 1, 1, -1, -1, 1, 1, 1, -1, -1, 1, 1, 1, 1]
    ,[ 1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, 1, 1, -1]
    ,[1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1]

    /* Número 6: */

    ,[1, -1, -1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, 1, 1]
    ,[1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, 1, 1]
    ,[-1, -1, -1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, 1, 1]

    /* Número 7: */
    ,[1, 1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1]
    ,[-1, 1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1]
    ,[1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1, -1, -1, 1, -1]

    /* Número 8: */
    ,[1, 1, 1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1]
    ,[-1, 1, -1, 1, -1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1]
    ,[-1, 1, -1, 1, -1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1]

    /* Número 9: */
    ,[1, 1, 1, 1, -1, 1, 1, 1, 1, -1, -1, 1, -1, -1, 1]
    ,[-1, 1, -1, 1, -1, 1, -1, 1, -1, -1, -1, 1, -1, -1, 1]
    ,[-1, 1, -1, 1, -1, 1, 1, 1, 1, -1, -1, 1, -1, -1, 1]

    /* Número 0: */
    ,[1, 1, 1, 1, -1, 1, 1, -1, 1, 1, -1, 1, 1, 1, 1]
    ,[-1, 1, -1, 1, -1, 1, 1, -1, 1, 1, -1, 1, -1, 1, -1]
    ,[1, 1, 1, 1, -1, 1, 1, -1, 1, 1, -1, 1, -1, 1, -1]];

let t1 = [1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
let t2 = [-1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
let t3 = [-1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
let t4 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
let t5 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
let t6 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
let t7 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
let t8 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1];
let t9 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1];
let t0 = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 1, 1];

let w_ant = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ,[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

let b_ant = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let w_novo = w_ant;
let b_novo = b_ant;
let teta = 0;
let alfa = 1;
let trocou = 1;
let ciclos = 0;
let y_liquido = 0;
let y = 0;
let ent = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

function gera_rede(neuronio, t)
{
    while (trocou == 1)
    {
        trocou = 0;
        ciclos += 1;
        console.log(`\n\nCiclos ${ciclos}`);

        for (entrada = 0; entrada < 30; entrada++)
        {
            y_liquido = w_ant[0][neuronio] * x[entrada][0] + w_ant[1][neuronio] * x[entrada][1] + w_ant[2][neuronio] * x[entrada][2] + w_ant[3][neuronio] * x[entrada][3] + w_ant[4][neuronio] * x[entrada][4] + w_ant[5][neuronio] * x[entrada][5] + w_ant[6][neuronio] * x[entrada][6] + w_ant[7][neuronio] * x[entrada][7] + w_ant[8][neuronio] * x[entrada][8] + w_ant[9][neuronio] * x[entrada][9] + w_ant[10][neuronio] * x[entrada][10] + w_ant[11][neuronio] * x[entrada][11] + w_ant[12][neuronio] * x[entrada][12] + w_ant[13][neuronio] * x[entrada][13] + w_ant[14][neuronio] * x[entrada][14] +  + b_ant[neuronio]
            if(y_liquido >= teta)
                y = 1;
            else
                y = -1

            if (y != t[entrada])
            {
                trocou = 1;
                w_novo[0][neuronio] = w_ant[0][neuronio] + alfa * x[entrada][0] * t[entrada];
                w_novo[1][neuronio] = w_ant[1][neuronio] + alfa * x[entrada][1] * t[entrada];
                w_novo[2][neuronio] = w_ant[2][neuronio] + alfa * x[entrada][2] * t[entrada];
                w_novo[3][neuronio] = w_ant[3][neuronio] + alfa * x[entrada][3] * t[entrada];
                w_novo[4][neuronio] = w_ant[4][neuronio] + alfa * x[entrada][4] * t[entrada];
                w_novo[5][neuronio] = w_ant[5][neuronio] + alfa * x[entrada][5] * t[entrada];
                w_novo[6][neuronio] = w_ant[6][neuronio] + alfa * x[entrada][6] * t[entrada];
                w_novo[7][neuronio] = w_ant[7][neuronio] + alfa * x[entrada][7] * t[entrada];
                w_novo[8][neuronio] = w_ant[8][neuronio] + alfa * x[entrada][8] * t[entrada];
                w_novo[9][neuronio] = w_ant[9][neuronio] + alfa * x[entrada][9] * t[entrada];
                w_novo[10][neuronio] = w_ant[10][neuronio] + alfa * x[entrada][10] * t[entrada];
                w_novo[11][neuronio] = w_ant[11][neuronio] + alfa * x[entrada][11] * t[entrada];
                w_novo[12][neuronio] = w_ant[12][neuronio] + alfa * x[entrada][12] * t[entrada];
                w_novo[13][neuronio] = w_ant[13][neuronio] + alfa * x[entrada][13] * t[entrada];
                w_novo[14][neuronio] = w_ant[14][neuronio] + alfa * x[entrada][14] * t[entrada];
                b_novo[neuronio] = b_ant[neuronio] + alfa * t[entrada];
                w_ant = w_novo;
                b_ant = b_novo;
            }
            console.log(`w_novo: ${w_novo} \nb_novo: ${b_novo}`);
        }
    }
    trocou = 1;
}


gera_rede(0, t1);
gera_rede(1, t2);
gera_rede(2, t3);
gera_rede(3, t4);
gera_rede(4, t5);
gera_rede(5, t6);
gera_rede(6, t7);
gera_rede(7, t8);
gera_rede(8, t9);
gera_rede(9, t0);

/* 
    *******************************************************
    Relacionado a interface
    *******************************************************
*/


function fn_muda_estilo(id, index)
{
    document.getElementById(id).style.backgroundColor = "#fdb927";
    document.getElementById(id).style.transition = "0.2s";
    ent[index] = 1;
    console.log(`Entrada: ${ent}`);
}

function testa_rede()
{
    let saida1 =  w_ant[0][0] * ent[0] + w_ant[1][0] * ent[1] + w_ant[2][0] * ent[2] + w_ant[3][0] * ent[3] + w_ant[4][0] * ent[4] + w_ant[5][0] * ent[5] + w_ant[6][0] * ent[6] + w_ant[7][0] * ent[7] + w_ant[8][0] * ent[8] + w_ant[9][0] * ent[9] + w_ant[10][0] * ent[10] + w_ant[11][0] * ent[11] + w_ant[12][0] * ent[12] + w_ant[13][0] * ent[13] + w_ant[14][0] * ent[14] +  + b_ant[0]
    let saida2 =  w_ant[0][1] * ent[1] + w_ant[1][1] * ent[1] + w_ant[2][1] * ent[2] + w_ant[3][1] * ent[3] + w_ant[4][1] * ent[4] + w_ant[5][1] * ent[5] + w_ant[6][1] * ent[6] + w_ant[7][1] * ent[7] + w_ant[8][1] * ent[8] + w_ant[9][1] * ent[9] + w_ant[10][1] * ent[10] + w_ant[11][1] * ent[11] + w_ant[12][1] * ent[12] + w_ant[13][1] * ent[13] + w_ant[14][1] * ent[14] +  + b_ant[1]
    let saida3 =  w_ant[0][2] * ent[0] + w_ant[1][2] * ent[1] + w_ant[2][2] * ent[2] + w_ant[3][2] * ent[3] + w_ant[4][2] * ent[4] + w_ant[5][2] * ent[5] + w_ant[6][2] * ent[6] + w_ant[7][2] * ent[7] + w_ant[8][2] * ent[8] + w_ant[9][2] * ent[9] + w_ant[10][2] * ent[10] + w_ant[11][2] * ent[11] + w_ant[12][2] * ent[12] + w_ant[13][2] * ent[13] + w_ant[14][2] * ent[14] +  + b_ant[2]
    let saida4 =  w_ant[0][0] * ent[0] + w_ant[1][3] * ent[1] + w_ant[2][3] * ent[2] + w_ant[3][3] * ent[3] + w_ant[4][3] * ent[4] + w_ant[5][3] * ent[5] + w_ant[6][3] * ent[6] + w_ant[7][3] * ent[7] + w_ant[8][3] * ent[8] + w_ant[9][3] * ent[9] + w_ant[10][3] * ent[10] + w_ant[11][3] * ent[11] + w_ant[12][3] * ent[12] + w_ant[13][3] * ent[13] + w_ant[14][3] * ent[14] +  + b_ant[3]
    let saida5 =  w_ant[0][0] * ent[0] + w_ant[1][4] * ent[1] + w_ant[2][4] * ent[2] + w_ant[3][4] * ent[3] + w_ant[4][4] * ent[4] + w_ant[5][4] * ent[5] + w_ant[6][4] * ent[6] + w_ant[7][4] * ent[7] + w_ant[8][4] * ent[8] + w_ant[9][4] * ent[9] + w_ant[10][4] * ent[10] + w_ant[11][4] * ent[11] + w_ant[12][4] * ent[12] + w_ant[13][4] * ent[13] + w_ant[14][4] * ent[14] +  + b_ant[4]
    let saida6 =  w_ant[0][0] * ent[0] + w_ant[1][5] * ent[1] + w_ant[2][5] * ent[2] + w_ant[3][5] * ent[3] + w_ant[4][5] * ent[4] + w_ant[5][5] * ent[5] + w_ant[6][5] * ent[6] + w_ant[7][5] * ent[7] + w_ant[8][5] * ent[8] + w_ant[9][5] * ent[9] + w_ant[10][5] * ent[10] + w_ant[11][5] * ent[11] + w_ant[12][5] * ent[12] + w_ant[13][5] * ent[13] + w_ant[14][5] * ent[14] +  + b_ant[5]
    let saida7 =  w_ant[0][0] * ent[0] + w_ant[1][6] * ent[1] + w_ant[2][6] * ent[2] + w_ant[3][6] * ent[3] + w_ant[4][6] * ent[4] + w_ant[5][6] * ent[5] + w_ant[6][6] * ent[6] + w_ant[7][6] * ent[7] + w_ant[8][6] * ent[8] + w_ant[9][6] * ent[9] + w_ant[10][6] * ent[10] + w_ant[11][6] * ent[11] + w_ant[12][6] * ent[12] + w_ant[13][6] * ent[13] + w_ant[14][6] * ent[14] +  + b_ant[6]
    let saida8 =  w_ant[0][0] * ent[0] + w_ant[1][7] * ent[1] + w_ant[2][7] * ent[2] + w_ant[3][7] * ent[3] + w_ant[4][7] * ent[4] + w_ant[5][7] * ent[5] + w_ant[6][7] * ent[6] + w_ant[7][7] * ent[7] + w_ant[8][7] * ent[8] + w_ant[9][7] * ent[9] + w_ant[10][7] * ent[10] + w_ant[11][7] * ent[11] + w_ant[12][7] * ent[12] + w_ant[13][7] * ent[13] + w_ant[14][7] * ent[14] +  + b_ant[7]
    let saida9 =  w_ant[0][0] * ent[0] + w_ant[1][8] * ent[1] + w_ant[2][8] * ent[2] + w_ant[3][8] * ent[3] + w_ant[4][8] * ent[4] + w_ant[5][8] * ent[5] + w_ant[6][8] * ent[6] + w_ant[7][8] * ent[7] + w_ant[8][8] * ent[8] + w_ant[9][8] * ent[9] + w_ant[10][8] * ent[10] + w_ant[11][8] * ent[11] + w_ant[12][8] * ent[12] + w_ant[13][8] * ent[13] + w_ant[14][8] * ent[14] +  + b_ant[8]
    let saida0 =  w_ant[0][0] * ent[0] + w_ant[1][9] * ent[1] + w_ant[2][9] * ent[2] + w_ant[3][9] * ent[3] + w_ant[4][9] * ent[4] + w_ant[5][9] * ent[5] + w_ant[6][9] * ent[6] + w_ant[7][9] * ent[7] + w_ant[8][9] * ent[8] + w_ant[9][9] * ent[9] + w_ant[10][9] * ent[10] + w_ant[11][9] * ent[11] + w_ant[12][9] * ent[12] + w_ant[13][9] * ent[13] + w_ant[14][9] * ent[14] +  + b_ant[9]

    console.log(saida1);
    console.log(saida2);
    console.log(saida3);
    console.log(saida4);
    console.log(saida5);
    console.log(saida6);
    console.log(saida7);
    console.log(saida8);
    console.log(saida9);
    console.log(saida0);

    

    if(saida1 >= teta && saida2 < teta && saida3 < teta && saida4 < teta && saida5 < teta && saida6 < teta && saida7 < teta && saida8 < teta && saida9 < teta && saida0 < teta)
        document.getElementById("Resultado").innerText = "Saída: Número 1 reconecida"
    else if(saida1 < teta && saida2 >= teta && saida3 < teta && saida4 < teta && saida5 < teta && saida6 < teta && saida7 < teta && saida8 < teta && saida9 < teta && saida0 < teta)
        document.getElementById("Resultado").innerText = "Saída: Número 2 reconecida"
    else if(saida1 < teta && saida2 < teta && saida3 >= teta && saida4 < teta && saida5 < teta && saida6 < teta && saida7 < teta && saida8 < teta && saida9 < teta && saida0 < teta)
        document.getElementById("Resultado").innerText = "Saída: Número 3 reconecida"
    else if(saida1 < teta && saida2 < teta && saida3 < teta && saida4 >= teta && saida5 < teta && saida6 < teta && saida7 < teta && saida8 < teta && saida9 < teta && saida0 < teta)
        document.getElementById("Resultado").innerText = "Saída: Número 4 reconecida"
    else if(saida1 < teta && saida2 < teta && saida3 < teta && saida4 < teta && saida5 >= teta && saida6 < teta && saida7 < teta && saida8 < teta && saida9 < teta && saida0 < teta)
        document.getElementById("Resultado").innerText = "Saída: Número 5 reconecida"
    else if(saida1 < teta && saida2 < teta && saida3 < teta && saida4 < teta && saida5 < teta && saida6 >= teta && saida7 < teta && saida8 < teta && saida9 < teta && saida0 < teta)
        document.getElementById("Resultado").innerText = "Saída: Número 6 reconecida"
    else if(saida1 < teta && saida2 < teta && saida3 < teta && saida4 < teta && saida5 < teta && saida6 < teta && saida7 >= teta && saida8 < teta && saida9 < teta && saida0 < teta)
        document.getElementById("Resultado").innerText = "Saída: Número 7 reconecida"
    else if(saida1 < teta && saida2 < teta && saida3 < teta && saida4 < teta && saida5 < teta && saida6 < teta && saida7 < teta && saida8 >= teta && saida9 < teta && saida0 < teta)
        document.getElementById("Resultado").innerText = "Saída: Número 8 reconecida"
    else if(saida1 < teta && saida2 < teta && saida3 < teta && saida4 < teta && saida5 < teta && saida6 < teta && saida7 < teta && saida8 < teta && saida9 >= teta && saida0 < teta)
        document.getElementById("Resultado").innerText = "Saída: Número 9 reconecida"
    else if(saida1 < teta && saida2 < teta && saida3 < teta && saida4 < teta && saida5 < teta && saida6 < teta && saida7 < teta && saida8 < teta && saida9 < teta && saida0 >= teta)
        document.getElementById("Resultado").innerText = "Saída: Número 0 reconecida"
    else
    document.getElementById("Resultado").innerText = "Saída: Número não reconhecida"
}
