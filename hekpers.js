export function getDescription(text) {
    console.log(text);
 if (text.length > 10) {
        return text.substring(0, 10) + "...";
    }
    console.log(text)
    return text;
    
}