import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

interface Task {
    id: number;
    title: string;
    description: string;
}

interface Column {
    id: number;
    title: string;
    tasks: Task[];
}

@Component({
    selector: 'todo-board',
    template: `
    <div class="board">
      <h1 class="text-2xl font-bold mb-4">Trello-like Board</h1>
      <button (click)="addColumn()" class="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Add Column
      </button>
      <div class="flex space-x-4 overflow-x-auto pb-4">
        <div *ngFor="let column of columns" class="column bg-gray-100 p-4 rounded-lg w-72 flex-shrink-0">
          <h2 class="text-lg font-semibold mb-2">{{ column.title }}</h2>
          <div
            cdkDropList
            [cdkDropListData]="column.tasks"
            (cdkDropListDropped)="drop($event)"
            class="task-list min-h-[50px]"
          >
            <div
              *ngFor="let task of column.tasks"
              cdkDrag
              class="task bg-white p-3 mb-2 rounded shadow cursor-move"
            >
              <h3 class="font-medium">{{ task.title }}</h3>
              <p class="text-sm text-gray-600">{{ task.description }}</p>
            </div>
          </div>
          <button (click)="addTask(column)" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Task
          </button>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .board {
      padding: 20px;
    }
    .cdk-drag-preview {
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                  0 8px 10px 1px rgba(0, 0, 0, 0.14),
                  0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }
    .cdk-drag-placeholder {
      opacity: 0;
    }
    .cdk-drag-animating {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
    .task-list.cdk-drop-list-dragging .task:not(.cdk-drag-placeholder) {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
  `]
})
export class BoardComponent {
    columns: Column[] = [
        {
            id: 1,
            title: 'Backlog',
            tasks: [
                { id: 1, title: 'Research competitors', description: 'Analyze top 5 competitors in the market' },
                { id: 2, title: 'User survey', description: 'Create and distribute user satisfaction survey' },
                { id: 3, title: 'API Documentation', description: 'Update API docs for v2.0 release' },
                { id: 4, title: 'Security audit', description: 'Conduct quarterly security audit' },
            ]
        },
        {
            id: 2,
            title: 'To Do',
            tasks: [
                { id: 5, title: 'Homepage redesign', description: 'Implement new homepage layout' },
                { id: 6, title: 'Mobile app bug fixes', description: 'Address reported crashes on Android devices' },
                { id: 7, title: 'Newsletter template', description: 'Design new email newsletter template' },
            ]
        },
        // ... other columns
    ];

    drop(event: CdkDragDrop<Task[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
                event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }
    }

    addTask(column: Column) {
        const newTask: Task = {
            id: this.getNextId(),
            title: `New Task`,
            description: 'Click to edit description'
        };
        column.tasks.push(newTask);
    }

    addColumn() {
        const newColumn: Column = {
            id: this.getNextColumnId(),
            title: `New Column`,
            tasks: []
        };
        this.columns.push(newColumn);
    }

    private getNextColumnId(): number {
        return Math.max(...this.columns.map(column => column.id), 0) + 1;
    }

    private getNextId(): number {
        return Math.max(...this.columns.flatMap(column => column.tasks.map(task => task.id)), 0) + 1;
    }
}
