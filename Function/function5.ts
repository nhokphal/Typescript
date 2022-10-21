const functionOption = (num: number, num2: number) =>
{
    return `${num * num2}` 
}
console.log(functionOption(1, 3))


//user_email is optional 
const Description = (user_id: number, use_name: string, user_email?: string) =>
{
    console.log(user_id)
    console.log(use_name)
    // if define
    if(user_email != undefined)
    {
        console.log(user_email)
    }
}
Description(12,"\n", "jack")
Description(12, "jack", "youremail@email.com")