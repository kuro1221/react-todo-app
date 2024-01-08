import React, { FC, useState } from 'react'
import Button from '@mui/material/Button'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import { Chip } from '@mui/material'
import { on } from 'events'

interface TagSelectionProps {
  todoId: number
  onchangeTagToTodo: (id: number, tag: string) => void
}

export const TagSelection: FC<TagSelectionProps> = ({
  todoId,
  onchangeTagToTodo,
}) => {
  const [open, setOpen] = useState(false)
  const [tags, setTags] = useState(['筋トレ', '勉強', '読書', '朝のルーティン'])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="text" onClick={handleOpen}>
        タグ追加
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'sm'}
      >
        <Box p={3}>
          {' '}
          <Autocomplete
            id="tags-filled"
            options={tags}
            freeSolo
            onChange={(event, value) => {
              console.log(value)
              if (value) onchangeTagToTodo(todoId, value)
            }}
            renderTags={(value: readonly string[], getTagProps) =>
              value.map((option: string, index: number) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                  color="primary"
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} variant="filled" label="Tags" />
            )}
          />
        </Box>
      </Dialog>
    </div>
  )
}
