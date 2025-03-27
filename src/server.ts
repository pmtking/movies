import app from "./app";

const PORT = 8000
async function main() {
    try{
        app.listen(PORT , () => {
            console.log(`server on `)
        })
    } catch (err) {
        console.log(err)
    }
}

main();