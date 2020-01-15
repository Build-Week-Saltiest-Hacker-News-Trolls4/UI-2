import React, { useState,useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { 
    Box,  
    Heading, 
    DataTable,
    Button
} from 'grommet';
// import Favs from './favs';

const SaltyUsers = () => {
    const [data, setData] = useState([]);
   



    
    useEffect(() => {
        axiosWithAuth()
        .get('top20')
            .then(res => {
                // console.log(res.data);
                
                setData(res.data)
            
            })
            .catch(err => console.log(err))
    });

    //used useEffect to .get new comments has been commented out due to backend not ready for adding new comments,
    //I used axios withAuth and .get to return the list of new comments attached to the orgiginal salty comment using the original comments ID(comment_id) 

    // const id  = comment_id;
    //     useEffect(() => {
    //         axiosWithAuth()
    //         .get(`/added-comments/${id}`)
    //         .then(response => {
    //             setAddedComments(response.data);
                
    //         })
    //     .catch(error => {
    //     console.log('Server Error', error);
    //     });
    //     }, [id]);
    
    // below I used a axios .post to add new comment to database using original Id 

    // const addComment = comment => {
        
    //     const commentVal = {
    //         "comment_id": `${comment_id}`
    //     }

    //     axiosWithAuth()
    //         .post("added-comments", comment_id)
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // };

//     axiosWithAuth()
//       .delete(`added-comments` newCommentId)
//       .then(res => {
//         // console.log(res);
       
//       })
//       .catch(error => {
//         console.log(error);
//       });
//     


    const logout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    const columns = [
        
        {
          property: 'UserNm',
          header: 'UserName',
        },
        {
          property: 'Comment',
          header: 'Comment',
        },
        {
          property: 'Salty_Score',
          header: 'Salty Score',
        },
        {
          property: 'Button',
          header: 'Add Comment',  
        }
        
      ];
      
      const DATA = data.map(d => ({
        Key: d.comment_id,
        UserNm: d.author,
        Comment: <p>{d.comment_text}</p>,
        Salty_Score: d.score,
        
      }));
    
    return (

        // Button: <Button label='Add' onClick={() => addComment()} />
        <>
            {/* <Favs/> */}
            <div>
                <h1 className='saltyh1'>Saltiest Hackers</h1>
                <button onClick={logout}>Logout</button>
            </div>
            <Box margin='0 auto' width='100%' responsive={true} >
                <Box align='center' color='black' margin='5px auto' width='100%' responsive={true}>
                    <Heading color='white' margin='auto'>Top Twenty Saltiest</Heading>
                    <DataTable color='white' sortable={true} size='medium' columns={columns} data={DATA} background={{
                        header: "dark-3",
                        body: ["dark-4", "dark-3"],
                    footer: "dark-3"
                    }} />
                </Box>
            </Box>
        
            {/* {data.map(info => )
                <p>{info.comment_text}</p>
            } */}
        
            
        </>
    )
}

export default SaltyUsers;