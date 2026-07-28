function isPalindrome(name) 
{
 
  const formatted = name.toLowerCase();
  const reversed = formatted.split('').reverse().join('');

  if (formatted === reversed)
 {
    return `${name} is a Palindrome!`;
 } 
else
{
    return `${name} is NOT a Palindrome.`;
}
}


const result = isPalindrome("Ranik");
console.log(result);

