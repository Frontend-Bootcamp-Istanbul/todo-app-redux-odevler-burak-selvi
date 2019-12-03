import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 7px 5px;
  width: 150px;
  font-size: 14px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #ccc;
  margin-left: 15px;
  padding: 5px 15px;
  font-size: 1em;
`;

export const RemoveAllButton = styled.button`
  width: 90%;
  margin: 0 auto;
  display: block;
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px;
  background: #7d3232;
  color: #fff;
  cursor: pointer;
`;

export const TodoContainer = styled.div`
    background-color: whitesmoke;
  border-radius: 3px;
  width: 850px;
  margin: 30px auto;
  border: 1px solid #ddd;
`;

export const H3Container = styled.h3`
    background: #346;
  text-align: center;
  color: #fff;
  padding: 10px 15px;
  border-radius: 0 0 2px 2px;
  margin:0;
  margin-bottom: 20px;
`;

export const TodoListContainer = styled.div`
  display: inline-block;
  width: 30%;
  padding:10px;
  vertical-align: top;
  border-left: ${props => props.todolist ? '2px solid darkgray' : 'none'}
`;

export const TodoItem = styled.div`
    cursor: pointer;
    margin-bottom: 10px;
    text-decoration: ${props => props.checkedClass ? 'line-through' : 'none'};
`;

export const RemoveButton = styled.span`
  background-color: #76030B;
  font-weight: bold;
  display: inline-block;
  margin-left: 10px;
  padding: 5px;
  color: #fff;
  border-radius: 5px;
`;