# BPMN Diagrams Editor

This project is a simple demo of a BPMN Diagrams editor, which was created with the intent to check if it was possible to build a fully functional WebApp to draw BPMN Diagrams by using the [React-Diagramas Library](https://github.com/projectstorm/react-diagrams).<br>
This is by no means a professional application and shouldn't be used as-is without implementing new features or implementing the correct behaviours of components (the logical part of a BPMN diagram), but could be used as a baseline to see the potential of the underlying library cited above.

## Quick Demo

![Alt Text](https://s10.gifyu.com/images/Animationc566ede7677cc9eb.gif)

You can select the various elements by clicking on them, and can use a multiple selection by holding the <kbd>Ctrl</kbd> key.<br>
Each element has a certain number of **ports**, they are used to link elements with each other; 
to create a **Link** simply drag an arrow from a port to another.<br>
Links can also be bent by dragging them, this process creates a **BendPoint**, which can then be moved or removed.<br>
In order to delete an item, simply select it and press the <kbd>Del</kbd> or <kbd>Canc</kbd> key.

To use the app, you need NPM and WebPack, then simply navigate to the project's folder and type 
```
npm start
``` 


