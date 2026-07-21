// Import Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// ==========================================
// 1. ADD YOUR SUPABASE CREDENTIALS HERE
// ==========================================
const SUPABASE_URL = 'https://luczzggtatqxbdoonjqt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1Y3p6Z2d0YXRxeGJkb29uanF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2MDk4ODAsImV4cCI6MjEwMDE4NTg4MH0.g8P7jWj7UROzFFOfAcYjNoRjuhZk0DVrYAstHINg0SE';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// We will store the database statuses here
let dbStatuses = {};

// --- Live Clock Logic ---
function updateClock() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  document.getElementById('clock').innerText = now.toLocaleDateString('en-US', options);
}
setInterval(updateClock, 1000);
updateClock();

// --- Project Data Structure ---
const schedule = [
  {
    day: "Day 1",
    expectation: "Planning, UI Shells, and Data Structures",
    members: [
      {
        member: "Member 1", module: "Auth + App Shell",
        tasks: ["Set up Vue.js project structure", "Configure base layout", "Create sidebar/navbar skeleton", "Create login page UI", "Connect project with Supabase client setup"],
        expected: ["Project shell is created", "Login page UI exists", "App layout exists", "Sidebar/navbar placeholder exists"]
      },
      {
        member: "Member 2", module: "Employee Module",
        tasks: ["Define employee form fields", "Prepare employee module page structure", "Create UI wireframe (add, list, detail)", "Align with database schema for employee table"],
        expected: ["Employee module structure is planned", "Field list is finalized", "Page/component structure is ready"]
      },
      {
        member: "Member 3", module: "Task + Document Module",
        tasks: ["Define onboarding task template structure", "Define document tracking requirements", "Finalize task statuses (pending, in progress, completed, overdue)", "Plan task and document tables with Member 2/4"],
        expected: ["Task template model finalized", "Document requirements finalized", "Task/document workflow agreed"]
      },
      {
        member: "Member 4", module: "Dashboard + Integration + Docs",
        tasks: ["Define dashboard metrics (total, in progress, completed, pending/overdue)", "Create project documentation draft (background, rationale, etc)", "Coordinate module dependencies across all members"],
        expected: ["Dashboard metrics finalized", "First documentation draft started", "Dependency checklist created"]
      }
    ]
  },
  {
    day: "Day 2",
    expectation: "Backend connections and core module development. Supabase should be connected, auth working, modules begin implementation.",
    members: [
      {
        member: "Member 1", module: "Auth + App Shell",
        tasks: ["Implement Supabase auth login", "Set up session handling", "Create protected routes/middleware", "Connect authenticated user flow", "Polish navbar/sidebar layout"],
        expected: ["Login works", "Logout works", "Protected pages redirect properly", "App shell is navigable"]
      },
      {
        member: "Member 2", module: "Employee Module",
        tasks: ["Build add employee form UI", "Implement employee data validation", "Connect employee form to Supabase", "Create employee list page layout", "Create reusable employee form components"],
        expected: ["Employee form UI completed", "Form validation working", "Employee record can be added to database"]
      },
      {
        member: "Member 3", module: "Task + Document Module",
        tasks: ["Create onboarding task templates table or static config", "Create task insertion logic", "Begin employee tasks UI", "Start document table integration", "Define progress calculation method"],
        expected: ["Task template source is ready", "Task generation logic started", "Task table structure connected", "Progress logic drafted"]
      },
      {
        member: "Member 4", module: "Dashboard + Integration + Docs",
        tasks: ["Create dashboard page UI skeleton", "Prepare cards/table placeholders", "Begin test scenarios for login and employee creation", "Continue report/documentation writing", "Support integration testing between Members 1 and 2"],
        expected: ["Dashboard UI skeleton exists", "Basic test cases written", "Documentation expanded"]
      }
    ]
  },
  {
    day: "Day 3",
    expectation: "Core features working. App should support employee creation and onboarding task generation.",
    members: [
      {
        member: "Member 1", module: "Auth + App Shell",
        tasks: ["Finalize protected layout behavior", "Add user session display", "Improve navigation flow", "Ensure authenticated access to pages", "Fix auth-related bugs"],
        expected: ["Auth flow stable", "Route protection stable", "App navigation stable"]
      },
      {
        member: "Member 2", module: "Employee Module",
        tasks: ["Complete employee list page", "Complete employee detail page", "Display employee data properly", "Add loading/empty states", "Ensure add employee flow redirects properly"],
        expected: ["Employee list works", "Employee details page works", "Employee creation flow is complete"]
      },
      {
        member: "Member 3", module: "Task + Document Module",
        tasks: ["Auto-generate onboarding tasks after employee creation", "Display tasks on employee detail page", "Implement task status update functionality", "Show progress tracking based on completed tasks", "Begin document upload/status UI"],
        expected: ["Tasks are created for each new employee", "Tasks are visible", "Task statuses can be updated", "Progress can be shown"]
      },
      {
        member: "Member 4", module: "Dashboard + Integration + Docs",
        tasks: ["Connect dashboard cards to live data if possible", "Validate employee-to-task flow end-to-end", "Test task generation after employee creation", "Update module descriptions in documentation", "Track bugs and missing cases"],
        expected: ["Dashboard starts showing actual data", "Integration issues identified", "Documentation includes system modules"]
      }
    ]
  },
  {
    day: "Day 4",
    expectation: "Documents, dashboard, and integration. All major modules connected. Focus on end-to-end flow.",
    members: [
      {
        member: "Member 1", module: "Auth + App Shell",
        tasks: ["Polish layout and navigation", "Improve form/page consistency", "Add route guards for incomplete auth states", "Support final integration fixes", "Help members with reusable UI components"],
        expected: ["Shell is polished", "Navigation experience is smooth", "Common UI issues reduced"]
      },
      {
        member: "Member 2", module: "Employee Module",
        tasks: ["Refine employee detail page", "Add validations and error messages", "Improve employee list filters/search if time permits", "Fix CRUD-related issues", "Support integration with tasks/documents display"],
        expected: ["Employee module stable", "Validation stable", "Detail page properly integrated"]
      },
      {
        member: "Member 3", module: "Task + Document Module",
        tasks: ["Finish document upload feature or status management", "Connect documents to employee profile", "Finalize task update logic", "Complete progress indicator", "Ensure due date/status behavior is correct"],
        expected: ["Document flow works", "Task flow works end to end", "Progress display works reliably"]
      },
      {
        member: "Member 4", module: "Dashboard + Integration + Docs",
        tasks: ["Complete dashboard cards and summary data", "Add pending/overdue counts", "Test all flows (login, add, update, upload)", "Capture screenshots for report", "Continue final documentation"],
        expected: ["Dashboard works", "Screenshots captured", "End-to-end flow mostly stable"]
      }
    ]
  },
  {
    day: "Day 5",
    expectation: "Final testing, polish, deployment, and demo prep. No major new features.",
    members: [
      {
        member: "Member 1", module: "Auth + App Shell",
        tasks: ["Fix UI and navigation bugs", "Ensure protected routes work in deployed environment", "Polish login/logout experience", "Verify responsiveness", "Support final deployment fixes"],
        expected: ["Auth and layout are production/demo ready"]
      },
      {
        member: "Member 2", module: "Employee Module",
        tasks: ["Final testing of employee add/list/detail flow", "Fix validation or rendering bugs", "Ensure form submission is reliable", "Prepare demo-friendly sample employee data"],
        expected: ["Employee module fully stable for demo"]
      },
      {
        member: "Member 3", module: "Task + Document Module",
        tasks: ["Final test of task generation and updates", "Verify progress calculation", "Verify documents are visible and linked properly", "Fix status logic bugs", "Prepare sample cases for demo"],
        expected: ["Task/document module demo ready"]
      },
      {
        member: "Member 4", module: "Dashboard + Integration + Docs",
        tasks: ["Final dashboard verification", "Complete project documentation", "Prepare PPT/demo script", "Deploy app", "Run final end-to-end testing", "Prepare submission checklist"],
        expected: ["Dashboard stable", "Documentation complete", "Deployment complete", "Demo script ready"]
      }
    ]
  }
];

let totalTasks = 0;
const container = document.getElementById('timeline-container');

// --- Render Logic ---
function renderTracker() {
  container.innerHTML = '';
  totalTasks = 0;

  schedule.forEach((dayData, dayIndex) => {
    const daySection = document.createElement('div');
    daySection.className = 'day-section';
    
    daySection.innerHTML = `
      <div class="day-header">
        <h2>${dayData.day}</h2>
        <p class="team-expectation">${dayData.expectation}</p>
      </div>
      <div class="grid" id="grid-day-${dayIndex}"></div>
    `;
    container.appendChild(daySection);
    
    const grid = document.getElementById(`grid-day-${dayIndex}`);

    dayData.members.forEach((memberData, memberIndex) => {
      const card = document.createElement('div');
      card.className = 'card';
      
      let taskHTML = '';
      memberData.tasks.forEach((task, taskIndex) => {
        const taskId = `d${dayIndex}-m${memberIndex}-t${taskIndex}`;
        totalTasks++;
        
        // Get status from our Supabase dictionary, default to 'not-started'
        const currentStatus = dbStatuses[taskId] || 'not-started';
        
        taskHTML += `
          <li class="task-item" id="item-${taskId}" data-status="${currentStatus}">
            <div class="task-header">
              <span class="task-label">${task}</span>
              <select class="status-select" id="select-${taskId}" onchange="updateStatus('${taskId}', this.value)">
                <option value="not-started" ${currentStatus === 'not-started' ? 'selected' : ''}>Not Started</option>
                <option value="on-schedule" ${currentStatus === 'on-schedule' ? 'selected' : ''}>On Schedule</option>
                <option value="delayed" ${currentStatus === 'delayed' ? 'selected' : ''}>Delayed</option>
                <option value="done" ${currentStatus === 'done' ? 'selected' : ''}>Done</option>
              </select>
            </div>
          </li>
        `;
      });

      const expectedOutputs = memberData.expected.map(exp => `<li>${exp}</li>`).join('');

      card.innerHTML = `
        <div class="card-header">
          <div class="member-title">${memberData.member}</div>
          <div class="module-title">${memberData.module}</div>
        </div>
        <ul class="task-list">
          ${taskHTML}
        </ul>
        <div class="expected-output">
          <h4>Expected Output</h4>
          <ul>${expectedOutputs}</ul>
        </div>
      `;
      
      grid.appendChild(card);
    });
  });

  updateProgress();
}

// --- State Management ---
// We attach this to `window` because type="module" scopes functions locally
window.updateStatus = async function(taskId, newStatus) {
  // 1. Optimistically update UI instantly for the user
  document.getElementById(`item-${taskId}`).setAttribute('data-status', newStatus);
  dbStatuses[taskId] = newStatus;
  updateProgress();

  // 2. Save to Supabase (Upsert creates if missing, updates if exists)
  const { error } = await supabase
    .from('tasks')
    .upsert({ id: taskId, status: newStatus });

  if (error) {
    console.error('Error updating status:', error);
    alert("Failed to save to database. Please check your connection.");
  }
};

function updateProgress() {
  let overallCompleted = 0;

  schedule.forEach((dayData, dayIndex) => {
    dayData.members.forEach((memberData, memberIndex) => {
      memberData.tasks.forEach((task, taskIndex) => {
        const taskId = `d${dayIndex}-m${memberIndex}-t${taskIndex}`;
        if (dbStatuses[taskId] === 'done') {
          overallCompleted++;
        }
      });
    });
  });

  const overallPercent = Math.round((overallCompleted / totalTasks) * 100) || 0;
  document.getElementById('overall-progress').style.width = `${overallPercent}%`;
  document.getElementById('overall-text').innerText = `${overallPercent}% Complete (${overallCompleted}/${totalTasks} Tasks Done)`;
}

// --- Initialize App ---
async function initApp() {
  // 1. Fetch initial data from Supabase
  const { data, error } = await supabase.from('tasks').select('*');
  
  if (error) {
    console.error('Error fetching data:', error);
    container.innerHTML = '<div style="color:red; text-align:center; padding: 2rem;">Error connecting to database. Did you set your Supabase keys?</div>';
    return;
  }

  // 2. Populate local dictionary
  if (data) {
    data.forEach(row => {
      dbStatuses[row.id] = row.status;
    });
  }

  // 3. Render UI
  renderTracker();

  // 4. Set up Realtime listener (So you see what your team changes instantly)
  supabase
    .channel('public:tasks')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'tasks' }, payload => {
      const updatedId = payload.new.id;
      const updatedStatus = payload.new.status;
      
      // Update our local state
      dbStatuses[updatedId] = updatedStatus;
      
      // Update DOM if element exists
      const listItem = document.getElementById(`item-${updatedId}`);
      const selectBox = document.getElementById(`select-${updatedId}`);
      
      if (listItem && selectBox) {
        listItem.setAttribute('data-status', updatedStatus);
        selectBox.value = updatedStatus;
      }
      
      // Recalculate progress bar
      updateProgress();
    })
    .subscribe();
}

// Start the app
initApp();