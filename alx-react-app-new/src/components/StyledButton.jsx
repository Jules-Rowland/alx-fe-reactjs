function StyledButton() {
  return (
    <div>
    <button style ={{
        padding: '15px',
backgroundColor: 'green',
            Color: 'white',
borderRadius: '10px',
    }}>Click Me</button>
    <p>This button is styled using inline styles</p>
    </div>
  );
}
export default  StyledButton;
{/**Level 3: Reusing a Style Object for Multiple Elements
3. Create a component called DoubleBox that renders two divs using the same style object.
Give them:

Border: 2px solid blue

Margin: 10px

Padding: 20px

Text alignment: center
Text inside each should be different.

**/}