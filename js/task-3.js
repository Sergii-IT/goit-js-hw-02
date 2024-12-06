function getElementWidth(content, padding, border) {
    content=Number.parseFloat(content);
    padding=Number.parseFloat(padding);
    border=Number.parseFloat(border);
    
    const boxSizing=content + padding*2 + border*2;
    return boxSizing;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));