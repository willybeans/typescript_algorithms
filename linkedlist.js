var Node = /** @class */ (function () {
    function Node(newNode) {
        this.val = newNode;
        this.next = null;
    }
    Node.prototype.get_data = function () {
        return this.val;
    };
    Node.prototype.set_data = function (val) {
        this.val = val;
    };
    Node.prototype.get_next = function (val) {
        return this.next;
    };
    Node.prototype.set_next = function (next) {
        this.next = next;
    };
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(newObject) {
        this.val = newObject;
        this.head = null;
        this.new_node = null;
    }
    LinkedList.prototype.get_count = function () {
    };
    LinkedList.prototype.insert = function () {
        this.new_node = new Node(val);
    };
    LinkedList.prototype.find = function () {
    };
    LinkedList.prototype.deleteAt = function () {
    };
    LinkedList.prototype.print_list = function () {
        console.log(this.val);
    };
    return LinkedList;
}());
var ourList = new LinkedList(5);
ourList.print_list();
