import React, { useContext, useState } from 'react'
import '../../App.css'
import { GlobalContext } from '../../context/GlobalState';
import { Card, Container, Button, Form } from 'react-bootstrap';

const Blogs = ({ blogs, id }) => {
  const [reaction, setReaction] = useState({ liked: blogs.liked, disliked: blogs.disliked });
  const { Likes_Dislikes } = useContext(GlobalContext);
  const day1 = new Date(blogs.updated_at);
  const day2 = new Date();
  console.log('updateAt', day1, 'current', day2);
  const difference = Math.abs(day2 - day1);
  console.log(difference);
  const days = difference / (1000 * 3600 * 24)

  return (
    <Container className='mb-2'>
      {/* <div className='flex'> */}
      {/* logger and reactions*/}

      {/* Blogs and users */}
      <Card style={{ background: 'black', border: '2px solid' }}>
        <Card.Title className='flex' style={{ borderBottom: '1px grey solid' }}>
          <i className="fa fa-user m-3 " style={{ fontSize: '240%', color: 'silver' }}></i>
          <p className='mt-2' style={{color: 'silver'}}><h3 style={{color: 'white'}}>{blogs.user.name}</h3>{Math.floor(days)} day/s ago</p>
        </Card.Title>
        <Card.Body>
          <Card.Title style={{ color: '#FF4500', fontSize: '150%' }}>{blogs.title}</Card.Title>
          <Card.Text style={{ color: '#FF5800' }}>{blogs.post}</Card.Text>
          <Card.Img src='https://picsum.photos/200/70' alt='image' />
        </Card.Body>

      </Card>

      <Card className='bg-black flex'>
        <Card.Title>
          <i className="fa fa-user-secret" style={{ fontSize: "48px", color: "#0492C2" }}></i>
        </Card.Title>
        <Card.Body>
          <div className='flex'>
            <p>{blogs.likes}</p>
            <Button className='bg-black'>
              <i className="fa fa-thumbs-up"
                onClick={() => {
                  Likes_Dislikes(blogs.id, { likes: true, dislikes: false });
                  setReaction(pre => ({ liked: !pre.liked, disliked: false }))
                }}
                style={{ fontSize: '36px', color: reaction.liked ? 'green' : 'white' }}></i> <br />

            </Button>

          </div>
          <div className='flex'>
            <p>{blogs.dislikes}</p>
            <Button className='bg-black'>
              <i className="fa fa-thumbs-down"
                onClick={() => {
                  console.log(reaction, 'reactoins');
                  Likes_Dislikes(blogs.id, { likes: false, dislikes: true });
                  setReaction(pre => ({ disliked: !pre.disliked, liked: false }))
                }}
                style={{ fontSize: '36px', color: reaction.disliked ? 'orange' : 'white' }}></i>

            </Button>
          </div>
        </Card.Body>
        <Form.Control type='text' placeholder='Comment your exploration...' />
        <Button type='submit'>Comment</Button>
      </Card>

    </Container>
  )
}

export default Blogs