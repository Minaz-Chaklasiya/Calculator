var display= document.getElementById("display");

function append(val)
{
  if (isop(val) && isop(display.value[display.value.length-1]))
  {
    return;
  }
  else
  {
    display.value+=val;
  }
}

function result()
{
  display.value=eval(display.value);
}

function isop(val)
{
  if ( val=='+' || val=='-' || val=='*' || val=='/')
  {
    return true;
  }
  else {
    return false;
  }
}
