import test from 'ava';
import InsertionSort from './InsertionSort';
import SelectionSort from './SelectionSort';
import BubbleSort from './BubbleSort';
import ShellSort from './ShellSort';
import MergeSort from './MergeSort';
import QuickSort from './QuickSort';
import HeapSort from './HeapSort';

test.beforeEach((t) => {
  t.context.arr = [65, 3, 21, 85, 33, 18, 44, 98, 57, 46];
  t.context.result = [3, 18, 21, 33, 44, 46, 57, 65, 85, 98];
});

test('Insertion sort', (t) => {
  t.deepEqual(InsertionSort.sort(t.context.arr), t.context.result);
});

test('Selection sort', (t) => {
  t.deepEqual(SelectionSort.sort(t.context.arr), t.context.result);
});

test('Bubble sort', (t) => {
  t.deepEqual(BubbleSort.sort(t.context.arr), t.context.result);
});

test('Shell sort', (t) => {
  t.deepEqual(ShellSort.sort(t.context.arr), t.context.result);
});

test('Merge sort', (t) => {
  t.deepEqual(MergeSort.sort(t.context.arr), t.context.result);
});

test('Quick sort', (t) => {
  t.deepEqual(QuickSort.sort(t.context.arr), t.context.result);
});

test('Heap sort', (t) => {
  t.deepEqual(HeapSort.sort(t.context.arr), t.context.result);
});
