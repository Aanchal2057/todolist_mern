import todo from "../model/Todo.js";
export const addTodo= async(request,response)=>{
   try{
    const newTodo = await todo.create({
        data:request.body.data,
        createdAt:Date.now()
       })
       await newTodo.save();
       return response.status(200).json(newTodo);
   }catch(error){
      return response.status(500).json(error.message);
   }
}
export const getTodo = async(request,response) =>{
    try{
        const todos = await todo.find({}).sort({ 'createdAt': -1 })
           return response.status(200).json(todos);
       }catch(error){
          return response.status(500).json(error.message);
       }
}

export const toggleTodoDone = async (request, response) => {
    try {
        const todoRef = await todo.findById(request.params.id);

        const newtodo = await todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done }
        )

        await newtodo.save();

        return response.status(200).json(newtodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}