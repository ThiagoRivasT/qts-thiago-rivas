import{
    assertExists,
    assertGreater,
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
    assertLessOrEqual,
    assertNotEquals,
    assertAlmostEquals,
    assertGreaterOrEqual,
}from "https://deno.land/std@0.224.0/testing/asserts.ts"

let aluno = "Cróvis José"
let professores = ["João", "Lais", "Davi", "Bruno Aparecido Cano", "Alan"]

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Cróvis José");         //Ele verifica se tem algum nome dentro das especificaçãoes de aluno//
    assertStringIncludes(aluno, "José");        //Ele verifica se a string possui pelo menos parcialmente algo especificado no assert//
})

Deno.test("Testando array do professor (API)", () => {
    assertArrayIncludes(professores,        //Ele verifica se todos os nomes da lista estão batendo com o professores, n necessariamente precisando ter todos mas todos que tiver estar la//
        ["Davi", "Lais", "Alan"],
        "Opa! Algo deu errado!");
})

let n = 14
let nm = 15
Deno.test("Testando assert Greater", () =>{
    assertGreater(nm,14),       //Verifica se o numero passado é maior que o minimo identificado no codigo//
    "Opa, erro no assert greater"
})

Deno.test("Testando assert GOrEqual", () =>{
    assertGreaterOrEqual(n,14),     //Verifica se o numero passado é maior ou igual que o minimo identificado no codigo//
    "Opa, erro no assert greater or equal"
})

Deno.test("Testando assert less or equal", () =>{
    assertLessOrEqual(n,14),        //Verifica se o numero passado é menor ou igual ao numero identificado no codigo//
    "Opa, erro no assert less or equal"
})

Deno.test("Testando assert not equals", () =>{
    assertNotEquals(nm,14),         //Verifica se a informação passada não é igual a definida no codigo//
    "Opa, erro no assert Not equals"
})

Deno.test("Testando assert Exists", () =>{
    assertExists(nm,14),            //Verifica se existe um informação sendo passada//
    "Opa, erro no assert Exists"
})

Deno.test("Testando assert Almost Equals", () =>{
    assertAlmostEquals(nm,14,1.5),      //Verifica se a informação passada é proxima a identificada no codigo de acordo com uma tolerancia de preferencia//
    "Opa, erro no assert Almost Equals"
})