# Session Interpolate Solution
Refreshment about the assignment [here](./assignment.md).

The solution is based on regular expressions.

The regular expression used can be explained in the following manner: 
`get any string, that starts with the left delimiter, doesnt contain the left delimiter, and ends with the right delimiter`

The idea that it starts with the left delimiter and ends with the right delimiter is trivial 
(at lest when it comes to languages that start from left to right). The reason why we need to also
specify that it shouldn't contain the left delimiter is to avoid merging the matches together
by taking the first left delimiter and the last right delimiter.



