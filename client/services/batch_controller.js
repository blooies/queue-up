BatchController = {
    getBatches: function(params) {
        var startTime;
        var startTimeOriginal = moment().hour(params.startHour).minute(params.startMinute);
        var start = startTimeOriginal.clone();
        var batchEndTime;
        var batchEndTimeOriginal;
        var endTime = moment().hour(params.endHour).minute(params.endMinute);
        var attendees = parseInt(params.totalAttendees);
        var totalAttendees = parseInt(params.totalAttendees);
        var attendeesPerBatch = parseInt(params.attendeesPerBatch);
        var minutesPerBatch = parseInt(params.minutesPerBatch);
        var startNumberQueue = 0;
        var endNumberQueue;
        var batches = [];
        var counter = 0;

        while (attendees > 0) {
            startTime = startTimeOriginal.clone();
            batchEndTimeOriginal = startTimeOriginal.add(minutesPerBatch, 'minutes');
            batchEndTime = batchEndTimeOriginal.clone();
            endNumberQueue = startNumberQueue + attendeesPerBatch;
            endNumberQueue = (endNumberQueue > totalAttendees) ? totalAttendees : endNumberQueue;

            var batch = {
                name: 'Batch ' + counter,
                startTimeOriginal: start,
                endTimeOriginal: endTime,
                startTime: startTime,
                endTime: batchEndTime,
                totalAttendees: endNumberQueue - startNumberQueue,
                minutesPerBatch: minutesPerBatch,
                overtime: batchEndTime > endTime,
                startNumberQueue: startNumberQueue + 1,
                endNumberQueue: endNumberQueue
            }

            batches.push(batch);
            startTime = batchEndTimeOriginal;
            startNumberQueue = endNumberQueue;
            attendees = attendees - attendeesPerBatch;
            counter += 1;
        }
        console.log(batches)
        return batches;
    },

    getInfoAboutOvertime: function(endTime, batches) {
        var lastBatch = batches[batches.length -1];
        var ms = lastBatch.endTime.diff(endTime);
        var duration = moment.duration(ms);
        var minutes = duration.asMinutes();

        return {
            minutesOvertime: minutes,
            currentEndTime: lastBatch.endTime.format("HH:mm:ss")
        }
    }
}