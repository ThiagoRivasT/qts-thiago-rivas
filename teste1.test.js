let a = "oi"
let b = "olá"

Deno.test("teste do oi (NO API)", () => {
    if(a != "oi") {
        throw new Error(`${a} não é oi`);
    }
})

Deno.test("não pode ser oi (NO API)", () =>{
    if (b == "oi") {
        throw new Error(`${a} é oi`)
    }
})