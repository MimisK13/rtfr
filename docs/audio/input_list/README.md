# Input List

The input list is a detailed breakdown of all audio sources that need to be mic’d or DI’d during the performance. 
It typically includes the channel number, source name, microphone or DI preference, and sometimes monitor send references.

It’s essential that the input list is:

- Clear and ordered by channel number
- Consistent with the stage plot
- Reflective of the actual setup used live

What should this section include?
- Channel number (1, 2, 3…)
- Instrument/source name (e.g. Kick In, Snare Top, Bass DI)
- Mic/DI preference (optional, but helpful)
- Phantom power requirements
- Notes (e.g. stereo pairs, shares with backline DI)

Optional columns:
- Monitor sends (e.g. which mixes need that signal)
- Subgroups (if artist uses a specific routing scheme)

## Sample Format (table or list)

CH   Source           Mic/DI             Notes
---------------------------------------------------------
1    Kick In          Beta 91A           Inside
2    Kick Out         Beta 52A           Outside
3    Snare Top        SM57               
4    Snare Bottom     e604               Phase reversed
5    Hi-Hat           KM184              
6    Rack Tom         e904               
7    Floor Tom        e904               
8    Overhead L       KM184              
9    Overhead R       KM184              
10   Bass DI          Radial J48         
11   Bass Mic         MD421              
12   Guitar L         SM57               
13   Guitar R         SM57               
14   Keys L           DI                 
15   Keys R           DI                 
16   Lead Vox         e935               
17   BV 1             e935               
18   BV 2             e935

## Tips

- Don’t forget to list any playback channels, talkbacks, or tracks (click/cue).
- If stereo channels are used, label both sides (e.g. Keys L/R).
- If you’re using a digital stagebox, make sure input numbers align with the patch.

## Color Coding

In complex setups — especially with large ensembles, multiple similar instruments, or musicians who have multiple lines (e.g. vocals + keys) — it’s good practice to group inputs by musician or position using color codes.

This helps both the FOH and monitor engineers quickly identify which inputs belong together during patching or troubleshooting.

`How to implement:`

- Assign a color to each musician (e.g. blue for drummer, green for bass player).
- Use that color consistently across:
    Input list
    Stage plot
- Channel labels on console or stagebox
- If delivering the input list as a spreadsheet or PDF, apply background color or highlight to rows by group.

`Example`

| CH | Source   | Mic/DI     | Notes    | Color (Group)     |
| -- | -------- | ---------- | -------- | ----------------- |
| 1  | Kick In  | Beta 91A   | Inside   | **Blue (Drums)**  |
| 2  | Kick Out | Beta 52A   | Outside  | **Blue (Drums)**  |
| 10 | Bass DI  | Radial J48 |          | **Green (Bass)**  |
| 14 | Keys L   | DI         | Stereo L | **Yellow (Keys)** |
| 15 | Keys R   | DI         | Stereo R | **Yellow (Keys)** |

💡 You don’t need to overdo it — just enough to help the tech team group and prioritize during setup.
