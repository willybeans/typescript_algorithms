class Node {
	private val: number;
	private next: number;
	constructor(newNode: number) {
	this.val = newNode;
	this.next = null;
	}
	public get_data(): void {
		return this.val;
	}
	public set_data(val: number): void {
		this.val = val;
	}
	get_next(val: number) {
		return this.next;
	}
	set_next(next: number) {
		this.next = next;
	}

}

class LinkedList {
	private val: number;
	private head: number;

	constructor(newObject: number) {
		this.val = newObject;
		this.head = null;
		this.new_node = null;
	}
	get_count() {

	}
	insert() {
	this.new_node =	new Node(val);

	}
	find() {

	}
	deleteAt() {

	}
	print_list() {
		console.log(this.val);
	}

}
let ourList = new LinkedList(5);
ourList.print_list();
