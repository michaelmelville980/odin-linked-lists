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
        let currentNode = this.head;
        let counter = 0;
        while (counter < index){
            currentNode = currentNode.nextNode;
            counter++;
        }
        return currentNode;
    }

    //Removes last element from list (assumes list at least 1)
    pop(){
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else if (this.size === 2){
            this.tail = this.head;
        }else{
            let newLastNode = this.at(this.size - 2);
            this.tail = newLastNode;
            newLastNode.nextNode = null;
        }
        this.size--;
    }

    //Returns true if passed value is in list, false otherwise
    contains(value){
        let counter = 0;
        let currentNode = this.head;
        let containsValue = (this.head.value === value);
        while (!containsValue && counter < this.size()){
            currentNode = currentNode.nextNode;
            if (currentNode.value === value){
                containsValue = true;
            }
            counter++;
        }
        return containsValue;
    }

    //Returns index of node containing value, or null if not found
    find(value){
        let counter = 0;
        let currentNode = this.head;
        let index = null;
        if (currentNode.value === value){
            index = counter;
        }
        while (index === null && counter < this.size){
            currentNode = currentNode.nextNode;
            counter++;
            if (currentNode.value === value){
                index = counter;
            }
        }
        return index;
    }

    //Represents LinkedList objects as strings (value) -> (value) -. (value) -> null
    toString(){
        let string = "";
        let currentNode = this.head;
        for (let i = 0; i < this.size; i++){
            string += "( " + currentNode.value.toString() + " )" + "->";
            currentNode = currentNode.nextNode;
        }
        return string;
    }
}