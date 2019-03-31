class _Node {
	private val: number;
	private next: number;
	constructor(newNode: number) {
	this.val = newNode;
	this.next = null;
	}
	public get_data(): number {
		return this.val;
	}
	public set_data(val: number): void {
		this.val = val;
	}
	public get_next(val: number): number {
		return this.next;
	}
	public set_next(next: number) {
		this.next = next;
	}

}

class LinkedList {
	private val: number;
	private head: number;
	private new_node: any;
	private count: number;
	private current: any;
	constructor() {
		this.val = undefined;
		this.head = undefined;
		this.new_node = undefined;
		this.current = null;
		this.count = 0;
	}
	public getCount(): void {
		console.log(this.count);
	}
	public insert(val: number): void {
	this.new_node =	new _Node(val);
	this.current = null;
		if(this.head === undefined){
			this.head = this.new_node;
		} else {
			this.current = this.head;
			while(this.current.next){
				this.current = this.current.next
			}
			this.current.next = this.new_node;
		}
		this.count++;
	}
	public find(val: number): number {
		this.current = this.head;
		while(this.current.next.val != val){
			if(this.current.val === val){
				console.log(this.current);
			}
		}
	}
	public deleteAt(): void {

	}
	public printList(): void {
		this.current = this.head;
		while(this.current){
			console.log(this.current);
			this.current = this.current.next;
		}
	}

}
let ourList = new LinkedList();
ourList.insert(5);
ourList.insert(6);
ourList.insert(3);
ourList.insert(65);
ourList.find(3);
/*
ourList.getCount();
ourList.printList();
*/
