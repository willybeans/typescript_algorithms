var _Node = /** @class */ (function () {
    function _Node(newNode) {
        this.val = newNode;
        this.next = null;
    }
    _Node.prototype.get_data = function () {
        return this.val;
    };
    _Node.prototype.set_data = function (val) {
        this.val = val;
    };
    _Node.prototype.get_next = function (val) {
        return this.next;
    };
    _Node.prototype.set_next = function (next) {
        this.next = next;
    };
    return _Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.val = undefined;
        this.head = undefined;
        this.new_node = undefined;
        this.current = null;
        this.count = 0;
    }
    LinkedList.prototype.getCount = function () {
        console.log(this.count);
    };
    LinkedList.prototype.insert = function (val) {
        this.new_node = new _Node(val);
        this.current = null;
        if (this.head === undefined) {
            this.head = this.new_node;
        }
        else {
            this.current = this.head;
            while (this.current.next) {
                this.current = this.current.next;
            }
            this.current.next = this.new_node;
        }
        this.count++;
    };
    LinkedList.prototype.find = function (val) {
        this.current = this.head;
        while (this.current.next.val != val) {
            if (this.current.val === val) {
                console.log(this.current);
            }
        }
    };
    LinkedList.prototype.deleteAt = function () {
    };
    LinkedList.prototype.printList = function () {
        this.current = this.head;
        while (this.current) {
            console.log(this.current);
            this.current = this.current.next;
        }
    };
    return LinkedList;
}());
var ourList = new LinkedList();
ourList.insert(5);
ourList.insert(6);
ourList.insert(3);
ourList.insert(65);
ourList.find(3);
/*
ourList.getCount();
ourList.printList();
*/
