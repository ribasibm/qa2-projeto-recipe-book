const ingredients = [
    {
        id: "d4681a21-3869-40cc-a795-68e404269238",
        name: "Ovo"
    },
    {
        id: "76d5cb8c-7e54-4b3b-a8c0-49bece37b394",
        name: "Óleo"
    },
    {
        id: "1baa9462-b8cb-45bf-987f-39a14692dae8",
        name: "Açúcar"
    },
    {
        id: "e7809b95-2a82-483c-8fcd-5eeb99edf25c",
        name: "Milho (lata)"
    },
    {
        id: "caf39549-3178-4fac-ba23-a307ec35f94b",
        name: "Leite"
    },
    {
        id: "fd25f3c3-c18e-4237-a72f-ba7a429896c7",
        name: "Floco de milho"
    },
    {
        id: "10df2275-a6cc-477b-ad36-bd0e2c428962",
        name: "Coco ralado"
    },
    {
        id: "48ebe0a4-7c18-4122-8558-79cd32f81bb9",
        name: "Femento químico"
    },
]

function getById (id) {
    return ingredients.find(ingredient => ingredient.id === id)
}

module.exports = {
    getById
}