import * as tuitsDao from './tuits-dao.js';
// import posts from "./tuits.js";
// let tuits = posts;

const createTuit = async (req, res) => { // now it's asynchronous function
    const newTuit = req.body;
    // newTuit._id = (new Date()).getTime()+''; // ID created by database instead
    newTuit.image = 'NASA.png';
    newTuit.time = "now";
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.disliked = false;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.username = "NASA";
    newTuit.handle = "@NASA";
    // tuits.push(newTuit); // not using array anymore
    // actual tuit inserted in database with DAO's createTuit
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit); // respond with actual inserted tuit
    // res.json(newTuit);
  }
  
const findTuits = async (req, res) => { // now it's asynchronous function
  const tuits = await tuitsDao.findTuits() // retrieve tuits from database
  res.json(tuits);
 }
// const findTuits = (req, res) => res.json(tuits);


const updateTuit = async (req, res) => {// now it's an asynchronous function
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    // status reports success or failure to update document in database
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status); // respond with status object

    // no longer using array
    // const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate)
    // tuits[tuitIndex] = 
    //   {...tuits[tuitIndex], ...updates};
    // res.sendStatus(200);
  }  


const deleteTuit = async (req, res) => { // now it's an asynchronous function
    const tuitdIdToDelete = req.params.tid;
    // status reports success or failure to delete record from database
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.json(status); // respond with status object

    // no longer using array
    // tuits = tuits.filter((t) =>   
    //   t._id !== tuitdIdToDelete);
    // res.sendStatus(200);
  }
  

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
