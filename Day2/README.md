# Day2 - 10-Days-of-Javascript

To view solutions, open the file `/Day2/index.html` in your browser.
Do not forget to open the Developer panel and see the section `Console`.

##Day 2: Conditional Statements: If-Else

**Task**:

Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her according to the following rules:

    If 25 < score <= 30, then grade = A.
    If 20 < score <= 25, then grade = B.
    If 15 < score <= 20, then grade = C.
    If 10 < score <= 15, then grade = D.
    If 5 < score <= 10, then grade = E.
    If 0 <= score <= 5, then grade = F.

**Solution**:

In `js/if-else.js`.

##Day 2: Conditional Statements: Switch

**Task**:

Complete the getLetter(s) function in the editor. It has one parameter: a string, `s`, consisting of lowercase 
English alphabetic letters (i.e., a through `z`). It must return A, B, C, or D depending on the following criteria:

* If the first character in string is in the set `{a, e, i, o, u}`, then return A.
* If the first character in string is in the set `{b, c, d, f, g}`, then return B.
* If the first character in string is in the set `{h, j, k, l, m}`, then return C.
* If the first character in string is in the set `{n, p, q, r, s, t, v, w, x, y, z}`, then return D.

**Solution**:

In `js/switch.js`.