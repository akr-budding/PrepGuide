import { Topic } from '../models/question.model';

export const CODING_TOPIC: Topic = {
  key: 'coding', label: 'Coding + SQL', icon: '💻',
  tip: 'Read the idea first, then trace the code by hand once.',
  questions: [
    { q: 'Reverse a string in C#', tag: 'easy',
      say: 'Two-pointer approach: convert string to char array, swap first with last, move both pointers toward the center.',
      note: 'Use two pointers whenever the problem compares or swaps from both ends.',
      mem: 'Reverse = left and right walk toward each other.',
      code: `static string ReverseString(string input)
{
    char[] arr = input.ToCharArray();
    int left = 0, right = arr.Length - 1;
    while (left < right)
    {
        char temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++; right--;
    }
    return new string(arr);
}` },
    { q: 'Check if a number is palindrome', tag: 'easy',
      say: 'A number is palindrome if it reads the same forward and backward. Reverse the number mathematically and compare it with the original.',
      note: '% 10 gives last digit. / 10 removes last digit.',
      mem: 'Palindrome number = reverse number equals original.',
      code: `static bool IsPalindrome(int number)
{
    int original = number, reversed = 0;
    while (number > 0)
    {
        int digit = number % 10;
        reversed = reversed * 10 + digit;
        number = number / 10;
    }
    return original == reversed;
}` },
    { q: 'Find factorial — iterative and recursive', tag: 'easy',
      say: 'Factorial means multiplying from n down to 1. Iterative uses a loop. Recursive means function calls itself with smaller input until it reaches 0 or 1.',
      note: 'Recursive answer must have a base condition. Without base condition, it never stops.',
      mem: 'Factorial recursion = n * factorial(n - 1).',
      code: `static long FactorialIterative(int n)
{
    long result = 1;
    for (int i = 2; i <= n; i++) result *= i;
    return result;
}

static long FactorialRecursive(int n)
{
    if (n <= 1) return 1;
    return n * FactorialRecursive(n - 1);
}` },
    { q: 'Print Fibonacci series', tag: 'easy',
      say: 'Fibonacci series starts with 0 and 1. Every next number is the sum of previous two numbers.',
      note: 'Always track previous two numbers. After printing, shift them forward.',
      mem: 'Fibonacci = previous + current.',
      code: `static void PrintFibonacci(int count)
{
    int first = 0, second = 1;
    for (int i = 0; i < count; i++)
    {
        Console.Write(first + " ");
        int next = first + second;
        first = second; second = next;
    }
}` },
    { q: 'Check if a number is prime', tag: 'med',
      say: 'A prime number has exactly two factors: 1 and itself. Check divisibility from 2 up to square root of n.',
      note: 'If n has a factor bigger than sqrt(n), the matching factor is smaller than sqrt(n). So checking till sqrt is enough.',
      mem: 'Prime check = no divisors till square root.',
      code: `static bool IsPrime(int n)
{
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return false;
    return true;
}` },
    { q: 'Find largest and smallest in an array', tag: 'easy',
      say: 'Assume first element is both largest and smallest. Traverse once and update whenever you find a bigger or smaller value.',
      note: 'One loop is enough. Time complexity is O(n).',
      mem: 'Min max = start with first, improve while scanning.',
      code: `static (int min, int max) FindMinMax(int[] arr)
{
    int min = arr[0], max = arr[0];
    foreach (int num in arr)
    {
        if (num < min) min = num;
        if (num > max) max = num;
    }
    return (min, max);
}` },
    { q: 'Remove duplicates from an array', tag: 'med',
      say: 'Use HashSet because it stores unique values only. If Add returns true, it means this value appeared for the first time.',
      note: 'HashSet gives average O(1) lookup, so total time is O(n).',
      mem: 'Duplicates problem = HashSet is your friend.',
      code: `static int[] RemoveDuplicates(int[] arr)
{
    HashSet<int> seen = new HashSet<int>();
    List<int> result = new List<int>();
    foreach (int num in arr)
        if (seen.Add(num)) result.Add(num);
    return result.ToArray();
}` },
    { q: 'Valid parentheses problem', tag: 'med',
      say: 'Use stack. Opening brackets go into stack. For every closing bracket, check whether the top of stack has the matching opening bracket.',
      note: 'At the end stack must be empty. If anything remains, some opening bracket was never closed.',
      mem: 'Parentheses = stack matches nearest opening.',
      code: `static bool IsValidParentheses(string s)
{
    Stack<char> stack = new Stack<char>();
    foreach (char ch in s)
    {
        if (ch == '(' || ch == '{' || ch == '[') stack.Push(ch);
        else
        {
            if (stack.Count == 0) return false;
            char open = stack.Pop();
            if ((ch == ')' && open != '(') ||
                (ch == '}' && open != '{') ||
                (ch == ']' && open != '[')) return false;
        }
    }
    return stack.Count == 0;
}` },
    { q: 'Binary search in C#', tag: 'med',
      say: 'Binary search keeps low and high indexes. Check middle. If target is smaller, search left half. If bigger, search right half.',
      note: 'Use low + (high - low) / 2 to avoid overflow in very large arrays.',
      mem: 'Binary search = sorted array + middle decision.',
      code: `static int BinarySearch(int[] arr, int target)
{
    int low = 0, high = arr.Length - 1;
    while (low <= high)
    {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        else if (target < arr[mid]) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}` },
    { q: 'Bubble sort in C#', tag: 'easy',
      say: 'Compare adjacent elements and swap if they are in wrong order. Repeat passes until array is sorted.',
      note: 'After every outer loop, the largest remaining element is fixed at the end.',
      mem: 'Bubble sort = biggest bubbles to end.',
      code: `static void BubbleSort(int[] arr)
{
    for (int i = 0; i < arr.Length - 1; i++)
        for (int j = 0; j < arr.Length - i - 1; j++)
            if (arr[j] > arr[j + 1])
            {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
}` },
    { q: 'INNER JOIN vs LEFT JOIN', tag: 'med',
      say: 'INNER JOIN returns only matching rows from both tables.\n\nLEFT JOIN returns all rows from the left table, and matching rows from the right table. If there is no match, right table columns become NULL.',
      note: 'Use INNER JOIN when match is required. Use LEFT JOIN when left table records must not disappear.',
      mem: 'LEFT JOIN keeps everything from left.',
      code: `-- Employees with matching departments only
SELECT e.Name, d.DepartmentName
FROM Employees e
INNER JOIN Departments d ON e.DepartmentId = d.Id;

-- All employees, even if department is missing
SELECT e.Name, d.DepartmentName
FROM Employees e
LEFT JOIN Departments d ON e.DepartmentId = d.Id;` },
    { q: 'Find duplicate records in SQL', tag: 'med',
      say: 'Use GROUP BY on the duplicate-checking column and HAVING COUNT(*) > 1.',
      note: 'WHERE filters rows before grouping. HAVING filters groups after grouping.',
      mem: 'Duplicates in SQL = GROUP BY + HAVING count > 1.',
      code: `SELECT Email, COUNT(*) AS Total
FROM Employees
GROUP BY Email
HAVING COUNT(*) > 1;` },
    { q: 'Get 2nd highest salary', tag: 'med',
      say: 'Simple interview query: first find the maximum salary. Then find the maximum salary that is less than that maximum.',
      note: 'Inner query gets highest salary. Outer query gets the biggest salary below that.',
      mem: '2nd highest = MAX salary below MAX salary.',
      code: `SELECT MAX(Salary)
FROM Employees
WHERE Salary < (SELECT MAX(Salary) FROM Employees);` },
    { q: 'GROUP BY and HAVING', tag: 'med',
      say: 'GROUP BY groups rows. Aggregate functions like COUNT, SUM, AVG run per group. HAVING filters the grouped result.',
      note: 'WHERE cannot filter aggregate results. HAVING can.',
      mem: 'WHERE before group. HAVING after group.',
      code: `SELECT DepartmentId, COUNT(*) AS EmployeeCount
FROM Employees
GROUP BY DepartmentId
HAVING COUNT(*) > 5;` },
    { q: 'Window functions - basic idea', tag: 'hard',
      say: 'Window functions calculate values across related rows without collapsing them into one row. Unlike GROUP BY, the original rows remain visible.',
      note: 'PARTITION BY means calculate separately for each group, but keep every row.',
      mem: 'Window function = aggregate view without losing rows.',
      code: `SELECT Name, DepartmentId, Salary,
       AVG(Salary) OVER (PARTITION BY DepartmentId) AS DeptAvgSalary
FROM Employees;` },
  ]
};
