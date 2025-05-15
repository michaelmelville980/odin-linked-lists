import Node from './Node.js';

export default class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Adds new node (with value) to end of list
    append(value){
        const newNode = new Node(value);
        if (this.size === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    //Adds new node (with value) to start of list
    prepend(value){
        const newNode = new Node(value);
        if (this.size === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    //Returns size (# of nodes)
    size(){
        return this.size;
    }

    //Returns first node
    head(){
        return this.head;
    }

    //Returns last node 
    tail(){
        return this.tail;
    }

    //Returns node at given index
    at(index){

    }

    //Removes last element from list 
    pop(){

    }

    //Returns true if passed value is in list, false otherwise
    contains(value){

    }

    //Returns index of node containing value, or null if not found
    find(value){

    }

    //Represents LinkedList objects as strings (value) -> (value) -. (value) -> null
    toString(){}
}