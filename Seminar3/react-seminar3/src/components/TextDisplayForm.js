import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { useState } from "react";

function TextDisplayForm() {
  const [text, setText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const updateText = (e) => {
    setText(e.target.value);
  }

  const handleClick = () => {
    setDisplayedText(text);
    setText(''); // Очищаем поле ввода после добавления текста
  }

  return (
    <div>
      <div>
        <TextField 
          fullWidth 
          onChange={updateText}
          label="Введите текст"
          variant="filled"
          value={text}
        />
      </div>
      <Button onClick={handleClick} variant="outlined">Добавить</Button>
      <Card className={displayedText ? 'active' : 'hidden'}>
        <CardContent>
          <Typography variant="h5" component="div">{displayedText}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default TextDisplayForm;