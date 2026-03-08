// down pase

function printSomethingNtime(n) {
	if(n==0) return 
	console.log(n);
	printSomethingNtime(n-1)
} 

printSomethingNtime(5);

// time complexity 
// n element push in call stach and n element removing from call stack
// O(n)

// space complexity 
// no extra space used 
// O(1)


// up phase 
function upPhaseRecursion(n) {
    if (n==0) return;
    upPhaseRecursion(n-1);
    console.log(n);
}

upPhaseRecursion(5);
// time complexity 
// n element push in call stach and n element removing from call stack
// O(n)

// space complexity 
// no extra space used 
// O(1)