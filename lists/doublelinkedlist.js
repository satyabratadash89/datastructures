var doubleLinkedList=[
  {
  previous:'null',
    head:1,
    next:'null'
}
];

function addNodeAtEnd(dbllist, nodeHead){
  if(dbllist.length===0){
    return   {
  previous:'null',
    head:nodeHead,
    next:'null'
}
  }
  var previousNodeHead=dbllist[dbllist.length -1].head;
  dbllist[dbllist.length -1].next=nodeHead;
  var nodeHd=nodeHead;
  var nodeObj={previous:previousNodeHead,
              head:nodeHead,
              next:'null'};
  dbllist.push(nodeObj);
  console.log(doubleLinkedList);
  return doubleLinkedList;
}


function addNodeAfter(dbllist, posAftr, nodeHead){
  console.log("Inside nodeAfter"+dbllist);
  console.log("Inside nodeAfter"+dbllist);
    if(dbllist.length===0){
console.log("Cannot insert Node as List is empty");
  }
      if(dbllist.length<posAftr){
console.log("Cannot insert node as previous node doesn't exist");
  }
  var previousNodeHead=dbllist[posAftr].head;
  var nextNodeHead=dbllist[posAftr+1].head;
  dbllist[posAftr].next=nodeHead;
  dbllist[posAftr+1].previous=nodeHead;
    var nodeObj={previous:previousNodeHead,
              head:nodeHead,
              next:nextNodeHead
                };
dbllist.splice(posAftr, 0, nodeObj);
  console.log(doubleLinkedList);
  return dbllist;
}


function addNodeAtPosition(dbllist, pos, nodeHead){    
  if(dbllist.length===0){
console.log("Cannot insert Node as List is empty");
    return;
  }
  if(dbllist.length<pos){
console.log("Cannot insert node as position does not exist");
    return;
  }
  var previousNodeHead=dbllist[pos].head;
  var nextNodeHead=dbllist[pos].head;
  dbllist[posAftr].next=nodeHead;
  dbllist[posAftr+1].previous=nodeHead;
    var nodeObj={previous:previousNodeHead,
              head:nodeHead,
              next:nextNodeHead
                };
dbllist.splice(posAftr, 0, nodeObj);
  console.log(doubleLinkedList);
  return dbllist;
}

function deleteNodeFromPos(dbllist, pos){
    if(dbllist.length===0){
console.log("Cannot delete anything");
      return;
  }
  if(dbllist.length<pos){
console.log("Cannot delete node as position does not exist");
    return;
  }
 dbllist[pos-1].next=dbllist[pos+1].head;
  dbllist[pos+1].previous=dbllist[pos-1].head;
dbllist.splice(pos, 1);
  console.log(doubleLinkedList);
  return dbllist;
}
doubleLinkedList=addNodeAtEnd(doubleLinkedList, 2);
doubleLinkedList=addNodeAtEnd(doubleLinkedList, 4);
doubleLinkedList=addNodeAfter(doubleLinkedList, 3, 3);
