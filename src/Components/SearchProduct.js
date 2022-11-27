import React from 'react'
import {InputAdornment, TextField, Box } from '@mui/material'
import {Search} from '@mui/icons-material'

const SearchProduct = () => {
  return (
    <div>
      <Box>
                <TextField
                    className="search-desktop"
                    size="small"
                    type="text"
                    sx={{ width: "20vw" }}
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Search color="primary" />
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Search for items/categories"
                    name="search"
                    // value={searchKey}
                    // onChange={(e) => debounceSearch(e, 500)}
                ></TextField>
            </Box>
    </div>
  )
}

export default SearchProduct
