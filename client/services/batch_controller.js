BatchController = {
    getBatches: function(params) {
        var startTime;
        var startTimeOriginal = moment().hour(params.startTime.hour).minute(params.startTime.minute);
        var batchEndTime;
        var batchEndTimeOriginal;
        var endTime = moment().hour(params.endTime.hour).minute(params.endTime.minute);
        var attendees = params.totalAttendees;
        var totalAttendees = params.totalAttendees;
        var attendeesPerBatch = params.attendeesPerBatch;
        var minutesPerBatch = params.minutesPerBatch;
        var startNumberQueue = 0;
        var endNumberQueue;
        var batches = [];

        while (attendees > 0) {
            startTime = startTimeOriginal.clone();
            batchEndTimeOriginal = startTimeOriginal.add(minutesPerBatch, 'minutes');
            batchEndTime = batchEndTimeOriginal.clone();
            endNumberQueue = startNumberQueue + attendeesPerBatch;
            endNumberQueue = (endNumberQueue > totalAttendees) ? totalAttendees : endNumberQueue;

            var batch = {
                startTime: startTime,
                endTime: batchEndTime,
                attendees: endNumberQueue - startNumberQueue,
                minutesPerBatch: minutesPerBatch,
                overtime: batchEndTime > endTime,
                startNumberQueue: startNumberQueue + 1,
                endNumberQueue: endNumberQueue
            }

            batches.push(batch);
            startTime = batchEndTimeOriginal;
            startNumberQueue = endNumberQueue;
            attendees = attendees - attendeesPerBatch;
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